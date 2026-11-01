import type { APIRoute } from "astro";
import { generateOgImageForCard } from "@/utils/generateOgImages";

export const GET: APIRoute = async () => {
  const buffer = await generateOgImageForCard({
    eyebrow: "4C2026 National 2nd Prize",
    title: "TongXing: Local Perception and a Voice Agent on One Phone",
    metrics: [
      { value: "National 2nd", caption: "4C2026 national round" },
      { value: "35.16 ms", caption: "Mean obstacle-warning NPU latency" },
      { value: "3 compute paths", caption: "NPU vision, GPU LLM, CPU speech" },
    ],
  });

  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
