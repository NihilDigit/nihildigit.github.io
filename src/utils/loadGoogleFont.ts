async function loadGoogleFont(
  font: string,
  text: string,
  weight: number
): Promise<ArrayBuffer> {
  const uniqueChars = Array.from(new Set(text)).join("");
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(uniqueChars)}`;

  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) throw new Error("Failed to download dynamic font");

  const res = await fetch(resource[1]);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  return res.arrayBuffer();
}

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{
    name: string;
    data: ArrayBuffer;
    weight: 400 | 500 | 600 | 700;
    style: "normal";
  }>
> {
  const fontsConfig = [
    {
      name: "Inter",
      font: "Inter",
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Inter",
      font: "Inter",
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "JetBrains Mono",
      font: "JetBrains+Mono",
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "JetBrains Mono",
      font: "JetBrains+Mono",
      weight: 500 as const,
      style: "normal" as const,
    },
  ];

  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      const data = await loadGoogleFont(font, text, weight);
      return { name, data, weight, style };
    })
  );

  return fonts;
}

export default loadGoogleFonts;
