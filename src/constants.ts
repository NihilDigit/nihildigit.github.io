import type { Props } from "astro";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconOrcid from "@/assets/icons/IconOrcid.svg";
import IconZhihu from "@/assets/icons/IconZhihu.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/NihilDigit",
    linkTitle: `${SITE.author} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Telegram",
    href: "https://t.me/NihilDigit",
    linkTitle: `${SITE.author} on Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Zhihu",
    href: "https://www.zhihu.com/people/stars-50-20",
    linkTitle: `${SITE.author} on Zhihu`,
    icon: IconZhihu,
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0004-9426-3713",
    linkTitle: `${SITE.author} on ORCID`,
    icon: IconOrcid,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
