import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildLlmsFullTxt } from "@/utils/llms";

export const GET: APIRoute = async () => {
  const [papers, featured, projects] = await Promise.all([
    getCollection("papers"),
    getCollection("featured"),
    getCollection("projects"),
  ]);

  return new Response(buildLlmsFullTxt({ papers, featured, projects }), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
