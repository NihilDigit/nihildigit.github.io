import IconAndroid from "@/assets/icons/brands/android.svg";
import IconArchLinux from "@/assets/icons/brands/archlinux.svg";
import IconArxiv from "@/assets/icons/brands/arxiv.svg";
import IconOrcid from "@/assets/icons/brands/orcid.svg";
import IconTelegram from "@/assets/icons/brands/telegram.svg";
import IconBrowser from "@/assets/icons/octicons/browser-16.svg";
import IconMail from "@/assets/icons/octicons/mail-16.svg";
import IconFile from "@/assets/icons/octicons/file-16.svg";
import IconGitHub from "@/assets/icons/octicons/mark-github-16.svg";
import IconIssue from "@/assets/icons/octicons/issue-opened-16.svg";
import IconLinkExternal from "@/assets/icons/octicons/link-external-16.svg";
import IconPackage from "@/assets/icons/octicons/package-16.svg";
import IconPlay from "@/assets/icons/octicons/play-16.svg";
import IconPullRequest from "@/assets/icons/octicons/git-pull-request-16.svg";
import IconRepo from "@/assets/icons/octicons/repo-16.svg";

/** Brand marks that only read as themselves in their own colour. */
export const hrefIconTint = (href: string) =>
  /arxiv\.org/.test(href) ? "text-brand-arxiv" : undefined;

/**
 * Picks an icon from the href rather than the label: hrefs are structured,
 * labels are hand-written prose scattered across `src/data/**`.
 */
export const hrefIcon = (href: string) => {
  if (/^mailto:/.test(href)) return IconMail;
  if (/orcid\.org/.test(href)) return IconOrcid;
  if (/t\.me|telegram\./.test(href)) return IconTelegram;
  if (/\/(pull|merge_requests)\/\d+/.test(href)) return IconPullRequest;
  if (/\/issues\/\d+/.test(href)) return IconIssue;
  if (/\.apk$/.test(href)) return IconAndroid;
  if (/\.(dmg|exe|zip|tar\.\w+)$|\/releases\//.test(href)) return IconPackage;
  if (/archlinux\.org/.test(href)) return IconArchLinux;
  if (/\/packages?\//.test(href)) return IconPackage;
  if (/arxiv\.org/.test(href)) return IconArxiv;
  if (/\.pdf$/.test(href)) return IconFile;
  if (/\.(mp4|webm|mov)$|youtube\.com|youtu\.be/.test(href)) return IconPlay;
  if (/github\.com\/[^/]+\/[^/]+\/?$/.test(href)) return IconRepo;
  if (/github\.com/.test(href)) return IconGitHub;
  if (/^\//.test(href)) return IconBrowser;
  return IconLinkExternal;
};
