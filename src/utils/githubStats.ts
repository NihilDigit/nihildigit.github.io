type GitHubRepoResponse = {
  stargazers_count?: number;
};

export type GitHubRepoStats = {
  stars: number;
};

const githubHeaders = () => {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
};

export const formatStars = (stars: number) => {
  if (stars >= 10000) return `${(stars / 1000).toFixed(1)}k`;
  if (stars >= 1000) return `${(stars / 1000).toFixed(1)}k`;
  return new Intl.NumberFormat("en-US").format(stars);
};

export const getGitHubRepoStats = async (repos: string[]) => {
  const uniqueRepos = [...new Set(repos.filter(Boolean))];
  const stats = new Map<string, GitHubRepoStats>();
  const authMode = process.env.GITHUB_TOKEN ? "authenticated" : "anonymous";

  await Promise.all(
    uniqueRepos.map(async (repo) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: githubHeaders(),
        });

        if (!response.ok) {
          console.warn(
            `[github-stats] ${repo}: ${response.status} ${response.statusText}; using fallback if configured (${authMode})`,
          );
          return;
        }

        const data = (await response.json()) as GitHubRepoResponse;
        if (typeof data.stargazers_count !== "number") {
          console.warn(
            `[github-stats] ${repo}: missing stargazers_count; using fallback if configured (${authMode})`,
          );
          return;
        }

        stats.set(repo, { stars: data.stargazers_count });
        console.info(
          `[github-stats] ${repo}: ${data.stargazers_count} stars (${authMode})`,
        );
      } catch (error) {
        // Stars are decorative repo context; never fail the site build for them.
        const message =
          error instanceof Error ? error.message : "unknown error";
        console.warn(
          `[github-stats] ${repo}: ${message}; using fallback if configured (${authMode})`,
        );
      }
    }),
  );

  return stats;
};

type GitHubReleaseResponse = {
  assets?: { download_count?: number }[];
}[];

// GitHub has no repo-level download counter; the total is the sum of every
// release asset's download_count, paged because old releases still count.
export const getGitHubReleaseDownloads = async (repo: string) => {
  const authMode = process.env.GITHUB_TOKEN ? "authenticated" : "anonymous";
  try {
    let total = 0;
    for (let page = 1; ; page++) {
      const response = await fetch(
        `https://api.github.com/repos/${repo}/releases?per_page=100&page=${page}`,
        { headers: githubHeaders() },
      );
      if (!response.ok) {
        console.warn(
          `[github-stats] ${repo} releases: ${response.status} ${response.statusText} (${authMode})`,
        );
        return undefined;
      }
      const releases = (await response.json()) as GitHubReleaseResponse;
      for (const release of releases) {
        for (const asset of release.assets ?? []) {
          total += asset.download_count ?? 0;
        }
      }
      if (releases.length < 100) break;
    }
    console.info(`[github-stats] ${repo}: ${total} downloads (${authMode})`);
    return total;
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.warn(`[github-stats] ${repo} releases: ${message} (${authMode})`);
    return undefined;
  }
};
