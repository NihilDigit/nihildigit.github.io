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

  await Promise.all(
    uniqueRepos.map(async repo => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: githubHeaders(),
        });

        if (!response.ok) return;

        const data = (await response.json()) as GitHubRepoResponse;
        if (typeof data.stargazers_count !== "number") return;

        stats.set(repo, { stars: data.stargazers_count });
      } catch {
        // Stars are decorative repo context; never fail the site build for them.
      }
    })
  );

  return stats;
};
