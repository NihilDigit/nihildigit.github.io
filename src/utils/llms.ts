import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";
import { PROFILE } from "@/data/profile";

type Paper = CollectionEntry<"papers">;
type Featured = CollectionEntry<"featured">;
type Project = CollectionEntry<"projects">;

const site = SITE.website.replace(/\/$/, "");

const absoluteUrl = (href: string) => {
  if (/^https?:\/\//.test(href)) return href;
  return `${site}${href.startsWith("/") ? href : `/${href}`}`;
};

const paperHref = (paper: Paper) => {
  if (paper.data.hasProjectPage && paper.data.projectPageSlug) {
    return absoluteUrl(`/${paper.data.projectPageSlug}/`);
  }

  return paper.data.links[0]?.href ?? absoluteUrl("/papers/");
};

const featuredHref = (entry: Featured) =>
  absoluteUrl(entry.data.titleHref ?? `/#featured-${entry.id}`);

const repoHref = (repo: string) => `https://github.com/${repo}`;

const status = (paper: Paper) => {
  const venue = paper.data.venue;
  if (paper.data.status === "under-review") return `submitted to ${venue} and under review`;
  if (paper.data.status === "preprint") return `preprint for ${venue}`;
  if (paper.data.status === "accepted") return `accepted at ${venue}`;
  return `published in ${venue}`;
};

const keyNumbers = (paper: Paper) =>
  paper.data.keyNumbers?.map(n => `${n.value} ${n.caption}`).join("; ");

const linkLines = (links: { label: string; href: string }[]) =>
  links.map(link => `- ${link.label}: ${absoluteUrl(link.href)}`).join("\n");

const contributionLines = (entry: Featured) =>
  entry.data.contributions
    .map(item => {
      const links = item.links.map(link => `${link.label} ${link.href}`).join("; ");
      const suffix = links ? ` Links: ${links}.` : "";
      const diffstat = item.diffstat ? ` ${item.diffstat}.` : "";
      return `- ${item.label}: ${item.status}.${diffstat} ${item.detail}${suffix}`;
    })
    .join("\n");

export function buildLlmsTxt({
  papers,
  featured,
  projects,
}: {
  papers: Paper[];
  featured: Featured[];
  projects: Project[];
}) {
  const sortedPapers = [...papers].sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
  const sortedFeatured = [...featured].sort((a, b) => a.data.order - b.data.order);
  const spotlightProjects = [...projects]
    .filter(project => project.data.spotlight)
    .sort((a, b) => a.data.order - b.data.order);

  return [
    `# ${SITE.title}`,
    "",
    `> Personal portfolio of ${PROFILE.name} (${PROFILE.handle}), ${PROFILE.summary}`,
    "",
    PROFILE.llmsAbout[0],
    PROFILE.llmsAbout[1],
    PROFILE.llmsAbout[2],
    PROFILE.llmsAbout[3],
    "",
    "## Featured work",
    "",
    ...sortedFeatured.map(
      entry => `- [${entry.data.title}](${featuredHref(entry)}): ${entry.data.summary}`
    ),
    "",
    "## Papers",
    "",
    ...sortedPapers.map(paper => {
      const numbers = keyNumbers(paper);
      return `- [${paper.data.title}](${paperHref(paper)}): ${status(paper)}. ${paper.data.tldr ?? paper.data.abstract}${numbers ? ` Key numbers: ${numbers}.` : ""}`;
    }),
    "",
    "## Selected open source",
    "",
    ...spotlightProjects.map(
      project =>
        `- [${project.data.name}](${repoHref(project.data.repo)}): ${project.data.description}`
    ),
    "",
    "## Site",
    "",
    `- Home: ${absoluteUrl("/")}`,
    `- About: ${absoluteUrl("/about/")}`,
    `- ANVIL project page: ${absoluteUrl("/anvil/")}`,
    `- TongXing project page: ${absoluteUrl("/tongxing/")}`,
    `- Papers: ${absoluteUrl("/papers/")}`,
    `- Projects: ${absoluteUrl("/projects/")}`,
    `- Notes archive: ${absoluteUrl("/notes/")}`,
    `- RSS feed: ${absoluteUrl("/rss.xml")}`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt({
  papers,
  featured,
  projects,
}: {
  papers: Paper[];
  featured: Featured[];
  projects: Project[];
}) {
  const sortedPapers = [...papers].sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
  const sortedFeatured = [...featured].sort((a, b) => a.data.order - b.data.order);
  const sortedProjects = [...projects].sort((a, b) => a.data.order - b.data.order);

  const featuredSections = sortedFeatured.map(entry => {
    const lines = [
      `### ${entry.data.title}`,
      "",
      `- Page: ${featuredHref(entry)}`,
      entry.data.repo ? `- Repository: ${repoHref(entry.data.repo)}` : "",
      entry.data.status
        ? `- Status: ${entry.data.status}${entry.data.statusLink ? ` ${entry.data.statusLink.label} (${entry.data.statusLink.href})` : ""}.`
        : "",
      entry.data.links.length ? linkLines(entry.data.links) : "",
      "",
      entry.data.summary,
    ].filter(Boolean);

    if (entry.data.contributions.length) {
      lines.push("", "Current contribution list:", "", contributionLines(entry));
    }

    return lines.join("\n");
  });

  const paperSections = sortedPapers.map(paper => {
    const numbers = keyNumbers(paper);
    return [
      `## ${paper.data.title}`,
      "",
      `- Page: ${paperHref(paper)}`,
      `- Authors: ${paper.data.authors.map(author => author.name).join(", ")}`,
      `- Venue: ${status(paper)}.`,
      paper.data.links.length ? linkLines(paper.data.links) : "",
      numbers ? `- Key numbers: ${numbers}.` : "",
      "",
      "### TL;DR",
      "",
      paper.data.tldr ?? paper.data.abstract,
      "",
      "### Abstract",
      "",
      paper.data.abstract,
      paper.data.bibtex ? ["", "### BibTeX", "", "```bibtex", paper.data.bibtex.trim(), "```"].join("\n") : "",
    ]
      .filter(Boolean)
      .join("\n");
  });

  return [
    `# ${SITE.title} - Full Index`,
    "",
    `> Personal portfolio of ${PROFILE.name} (${PROFILE.handle}), ${PROFILE.summary}`,
    "",
    `Site: ${SITE.website}`,
    `GitHub: ${PROFILE.contact.github}`,
    `ORCID: ${PROFILE.contact.orcid.replace("https://orcid.org/", "")}`,
    "",
    "## About",
    "",
    ...PROFILE.llmsAbout,
    "",
    "### Education",
    "",
    `- ${PROFILE.education}`,
    "",
    "### Contact",
    "",
    `- Email (school): ${PROFILE.contact.schoolEmail.replace("@", " [at] ")}`,
    `- Email (personal): ${PROFILE.contact.personalEmail.replace("@", " [at] ")}`,
    `- GitHub: ${PROFILE.contact.github}`,
    `- ORCID: ${PROFILE.contact.orcid}`,
    `- Telegram: ${PROFILE.contact.telegram}`,
    "",
    ...paperSections,
    "",
    "## Featured Work",
    "",
    ...featuredSections,
    "",
    "## Projects",
    "",
    ...sortedProjects.map(project => {
      const meta = [project.data.language, project.data.license]
        .filter(Boolean)
        .join(", ");
      return `- ${project.data.name}: ${repoHref(project.data.repo)}${meta ? ` (${meta})` : ""}. ${project.data.description}`;
    }),
    "",
    "## Site Map",
    "",
    `- Home: ${absoluteUrl("/")}`,
    `- About: ${absoluteUrl("/about/")}`,
    `- ANVIL project page: ${absoluteUrl("/anvil/")}`,
    `- TongXing project page: ${absoluteUrl("/tongxing/")}`,
    `- Papers: ${absoluteUrl("/papers/")}`,
    `- Projects: ${absoluteUrl("/projects/")}`,
    `- Notes archive: ${absoluteUrl("/notes/")}`,
    `- RSS: ${absoluteUrl("/rss.xml")}`,
    "",
  ].join("\n");
}
