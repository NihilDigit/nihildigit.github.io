import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { SITE } from "@/config";

export const NOTES_PATH = "src/data/notes";
export const PAPERS_PATH = "src/data/papers";
export const FEATURED_PATH = "src/data/featured";

const notes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${NOTES_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      archived: z.boolean().default(true),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: `./${PAPERS_PATH}` }),
  schema: z.object({
    title: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        isMe: z.boolean().optional(),
      }),
    ),
    venue: z.string(),
    venueHref: z.string().optional(),
    venueDetail: z.string().optional(),
    status: z.enum(["preprint", "under-review", "accepted", "published"]),
    year: z.number(),
    pubDatetime: z.date(),
    arxivId: z.string().optional(),
    doi: z.string().optional(),
    abstract: z.string(),
    tldr: z.string().optional(),
    teaserVideo: z.string().optional(),
    teaserPoster: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
    hasProjectPage: z.boolean().default(false),
    projectPageSlug: z.string().optional(),
    keyNumbers: z
      .array(
        z.object({
          value: z.string(),
          caption: z.string(),
        }),
      )
      .optional(),
    bibtex: z.string().optional(),
  }),
});

const featured = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${FEATURED_PATH}` }),
  schema: z.object({
    title: z.string(),
    titleHref: z.string().optional(),
    repo: z.string().optional(),
    fallbackStars: z.number().optional(),
    eyebrow: z.string().optional(),
    eyebrowHref: z.string().optional(),
    order: z.number().default(0),
    status: z.string().optional(),
    statusVariant: z.enum(["live", "in-progress", "archived"]).optional(),
    summary: z.string(),
    metaTags: z.array(z.string()).default([]),
    badges: z
      .array(
        z.object({
          label: z.string().optional(),
          src: z.string().optional(),
          alt: z.string().optional(),
          href: z.string().optional(),
        }),
      )
      .default([]),
    contributions: z
      .array(
        z.object({
          status: z.enum(["done", "active", "planned", "closed"]),
          diffstat: z.string().default(""),
          label: z.string(),
          detail: z.string(),
          links: z
            .array(
              z.object({
                label: z.string(),
                href: z.string(),
              }),
            )
            .default([]),
        }),
      )
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
  }),
});

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    repo: z.string(),
    language: z.string().optional(),
    license: z.string().optional(),
    spotlight: z.boolean().default(false),
    partOf: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { notes, papers, featured, projects };
