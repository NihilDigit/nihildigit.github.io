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
  return {
    ...entry,
    data: { ...entry.data, contributions: await getOpenAniContributions() },
  };
};

export const resolveFeaturedCollection = async (entries: Featured[]) =>
  Promise.all(entries.map(resolveFeaturedContributions));
