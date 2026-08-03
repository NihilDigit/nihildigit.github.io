import { writeFile } from "node:fs/promises";
import { fetchOpenAniContributions } from "../src/utils/openAniPullRequests.ts";

const contributions = await fetchOpenAniContributions();
const path = new URL("../src/data/openAniPullRequests.json", import.meta.url);
await writeFile(path, `${JSON.stringify(contributions, null, 2)}\n`);
console.log(
  `wrote ${contributions.length} PRs to src/data/openAniPullRequests.json`,
);
