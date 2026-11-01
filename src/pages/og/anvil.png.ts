import type { APIRoute } from "astro";
import { getEntry } from "astro:content";
import { generateOgImageForCard } from "@/utils/generateOgImages";

export const GET: APIRoute = async () => {
  const anvil = await getEntry("papers", "anvil");
  const buffer = await generateOgImageForCard({
    eyebrow: anvil?.data.venueDetail ?? "arXiv preprint",
    title:
      anvil?.data.title ??
      "ANVIL: Accelerator-Native Video Interpolation via Codec Motion Vector Priors",
    metrics: [
      { value: "12.8 ms", caption: "1080p NPU inference, 8-bit integer" },
      { value: "28.4 ms", caption: "Median end-to-end, Snapdragon 8 Gen 3" },
      { value: "30 to 60 fps", caption: "Real-time frame doubling on mobile" },
    ],
  });

  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
