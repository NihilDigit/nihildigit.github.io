import { PROFILE } from "@/data/profile";
import snapshot from "@/data/openAniPullRequests.json";

export type OpenSourceContribution = {
  status: "done" | "active" | "planned" | "closed";
  diffstat: string;
  label: string;
  detail: string;
  group?: string;
  date?: string;
  sortLines?: number;
  sortTime?: number;
  links: { label: string; href: string }[];
};

type SnapshotEntry = OpenSourceContribution & {
  sortLines: number;
  sortTime: number;
};

type SearchResponse = {
  items?: {
    html_url: string;
    title: string;
    state: string;
    repository_url: string;
    pull_request?: { url?: string; merged_at?: string | null };
  }[];
};

type PullResponse = {
  additions?: number;
  deletions?: number;
  merged_at?: string | null;
  created_at?: string;
  state?: string;
};

const headers = () => {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return h;
};

const formatDiffstat = (additions: number, deletions: number) =>
  `+${new Intl.NumberFormat("en-US").format(additions)}/-${new Intl.NumberFormat("en-US").format(deletions)}`;

// PRs excluded from the list (e.g. mistaken submissions superseded by another PR).
const EXCLUDED_PRS = new Set(["https://github.com/open-ani/animeko/pull/3160"]);

export const fetchOpenAniContributions = async (): Promise<SnapshotEntry[]> => {
  const query = encodeURIComponent(
    `org:open-ani type:pr author:${PROFILE.handle}`,
  );
  const response = await fetch(
    `https://api.github.com/search/issues?q=${query}&per_page=100`,
    { headers: headers() },
  );
  if (!response.ok) {
    throw new Error(`search failed: ${response.status} ${response.statusText}`);
  }
  const data = (await response.json()) as SearchResponse;
  const items = (data.items ?? []).filter(
    item => !EXCLUDED_PRS.has(item.html_url),
  );

  const contributions = await Promise.all(
    items.map(async (item): Promise<SnapshotEntry | undefined> => {
      const repo = item.repository_url.split("/repos/")[1] ?? "open-ani";
      const prUrl = item.pull_request?.url;
      if (!prUrl) return undefined;

      const prResponse = await fetch(prUrl, { headers: headers() });
      if (!prResponse.ok) {
        throw new Error(
          `${repo} PR fetch failed: ${prResponse.status} ${prResponse.statusText}`,
        );
      }
      const pr = (await prResponse.json()) as PullResponse;
      const additions = pr.additions ?? 0;
      const deletions = pr.deletions ?? 0;
      const prNumber = item.html_url.split("/").pop();
      const timestamp = pr.merged_at ?? pr.created_at ?? "";
      const status: SnapshotEntry["status"] = pr.merged_at
        ? "done"
        : pr.state === "open"
          ? "active"
          : "closed";

      return {
        status,
        diffstat: formatDiffstat(additions, deletions),
        label: item.title,
        detail: "",
        date: timestamp.slice(0, 10),
        links: [{ label: `PR #${prNumber}`, href: item.html_url }],
        sortLines: additions + deletions,
        sortTime: Date.parse(timestamp) || 0,
      };
    }),
  );

  return contributions
    .filter((c): c is SnapshotEntry => c !== undefined)
    .sort((a, b) => b.sortTime - a.sortTime);
};

let cached: Promise<OpenSourceContribution[]> | undefined;

export const getOpenAniContributions = (): Promise<
  OpenSourceContribution[]
> => {
  cached ??= (async () => {
    try {
      const live = await fetchOpenAniContributions();
      console.info(`[open-ani] fetched ${live.length} PRs from GitHub`);
      return live;
    } catch (error) {
      // The contribution list is core content but must never fail the build;
      // fall back to the committed snapshot.
      const message = error instanceof Error ? error.message : "unknown error";
      console.warn(
        `[open-ani] live fetch failed (${message}); using committed snapshot`,
      );
      return snapshot as SnapshotEntry[];
    }
  })();
  return cached;
};
