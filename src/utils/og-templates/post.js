import { SITE } from "@/config";
import renderOgCard from "./card";

export default async post =>
  renderOgCard({
    eyebrow: "Archived note",
    title: post.data.title,
    subtitle: post.data.description,
    footerRight: new URL(SITE.website).hostname,
  });
