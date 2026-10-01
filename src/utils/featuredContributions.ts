import type { CollectionEntry } from "astro:content";
import {
  getOpenAniContributions,
  type OpenSourceContribution,
} from "./openAniPullRequests";

type Featured = CollectionEntry<"featured">;

type ResolvedFeatured = Omit<Featured, "data"> & {
  data: Omit<Featured["data"], "contributions"> & {
    contributions: OpenSourceContribution[];
  };
};

/**
 * Featured entries can declare `contributionsSource` in frontmatter to pull
 * their contribution list from a live source instead of hand-written YAML.
 */
export const resolveFeaturedContributions = async (
  entry: Featured,
): Promise<ResolvedFeatured> => {
  if (entry.data.contributionsSource !== "open-ani") {
    return entry;
  }
  const contributions = await getOpenAniContributions();
  return {
    ...entry,
    data: {
      ...entry.data,
      contributions,
      keyNumbers: [
        ...contributionKeyNumbers(contributions),
        ...entry.data.keyNumbers,
      ],
    },
  };
};

const formatCount = (n: number) => new Intl.NumberFormat("en-US").format(n);

// The list shows individual PRs; these totals carry the point of the card,
// that the work is large and still going, without reading every row.
const contributionKeyNumbers = (contributions: OpenSourceContribution[]) => {
  const merged = contributions.filter((c) => c.status === "done");
  let additions = 0;
  let deletions = 0;
  for (const c of merged) {
    const m = c.diffstat.replace(/,/g, "").match(/^\+(\d+)\/-(\d+)$/);
    if (!m) continue;
    additions += Number(m[1]);
    deletions += Number(m[2]);
  }
  const repos = [
    ...new Set(
      merged
        .flatMap((c) => c.links.map((l) => l.href.split("/")[4]))
        .filter(Boolean),
    ),
  ];
  const dates = merged
    .map((c) => c.date)
    .filter((d): d is string => !!d)
    .sort();
  const first = dates[0];
  const latest = dates.at(-1);
  const monthYear = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });

  return [
    {
      value: `${merged.length} merged PRs`,
      caption: `Across ${repos.join(", ")}`,
    },
    {
      value: `+${formatCount(additions)} / -${formatCount(deletions)}`,
      caption: "Lines changed in merged PRs",
    },
    ...(first && latest
      ? [
          {
            value: `Since ${monthYear(first)}`,
            caption: `Latest merge on ${latest}`,
          },
        ]
      : []),
  ];
};

export const resolveFeaturedCollection = async (entries: Featured[]) =>
  Promise.all(entries.map(resolveFeaturedContributions));
