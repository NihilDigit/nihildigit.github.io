import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildLlmsFullTxt } from "@/utils/llms";
import { resolveFeaturedCollection } from "@/utils/featuredContributions";

export const GET: APIRoute = async () => {
  const [papers, featured, upstream] = await Promise.all([
    getCollection("papers"),
    getCollection("featured").then(resolveFeaturedCollection),
    getCollection("upstream"),
  ]);

  return new Response(buildLlmsFullTxt({ papers, featured, upstream }), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
