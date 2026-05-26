import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { buildLlmsTxt } from "@/utils/llms";

export const GET: APIRoute = async () => {
  const [papers, featured, projects] = await Promise.all([
    getCollection("papers"),
    getCollection("featured"),
    getCollection("projects"),
  ]);

  return new Response(buildLlmsTxt({ papers, featured, projects }), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
