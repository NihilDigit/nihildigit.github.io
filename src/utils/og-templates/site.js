import { SITE } from "@/config";
import renderOgCard from "./card";

export default async () =>
  renderOgCard({
    eyebrow: new URL(SITE.website).hostname,
    title: SITE.title,
    subtitle: SITE.desc,
  });
