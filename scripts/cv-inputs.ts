// Prints `--input key=value` arguments for `typst compile`, so the CV carries
// the same live GitHub figures as the site. Each figure is optional: a failed
// fetch prints nothing for it and the CV falls back to its built-in value,
// because a stale number must never break the CV build.
import { fetchOpenAniContributions } from "../src/utils/openAniPullRequests.ts";
import {
  getGitHubReleaseDownloads,
  getGitHubRepoStats,
} from "../src/utils/githubStats.ts";

// stdout is spliced into the typst command line; the shared fetchers log
// progress with console.info, which must go to stderr instead.
console.info = console.error;

const inputs: Record<string, number | undefined> = {};

const stats = await getGitHubRepoStats(["open-ani/animeko", "NihilDigit/piko"]);
inputs.animeko_stars = stats.get("open-ani/animeko")?.stars;
inputs.piko_stars = stats.get("NihilDigit/piko")?.stars;
inputs.piko_downloads = await getGitHubReleaseDownloads("NihilDigit/piko");

try {
  const contributions = await fetchOpenAniContributions();
  inputs.animeko_merged = contributions.filter(
    (c) => c.status === "done",
  ).length;
} catch (error) {
  console.error(`[cv-inputs] open-ani: ${error}`);
}

console.log(
  Object.entries(inputs)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `--input ${key}=${value}`)
    .join(" "),
);
