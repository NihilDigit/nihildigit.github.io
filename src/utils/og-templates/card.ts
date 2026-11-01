import satori, { type SatoriOptions } from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export type OgCardMetric = {
  value: string;
  caption: string;
};

export type OgCardInput = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  metrics?: OgCardMetric[];
  footerRight?: string;
};

export default async function renderOgCard({
  eyebrow,
  title,
  subtitle,
  metrics = [],
  footerRight,
}: OgCardInput) {
  const handle = `~/${SITE.author.toLowerCase()}`;
  const rightMeta =
    eyebrow ?? footerRight ?? new URL(SITE.website).hostname;

  const defaultFooterLeft = "ANVIL  /  TongXing  /  piko  /  open-ani";

  const allText = [
    handle,
    rightMeta,
    title,
    subtitle ?? "",
    footerRight ?? "",
    metrics.length > 0 ? "" : defaultFooterLeft,
    ...metrics.flatMap(m => [m.value, m.caption]),
  ].join(" ");

  const titleSize = title.length > 52 ? 44 : title.length > 28 ? 52 : 64;

  const fonts = (await loadGoogleFonts(allText)) as SatoriOptions["fonts"];

  return satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "56px 64px",
          fontFamily: "Inter",
          color: "#0a0a0a",
          borderTop: "6px solid #047857",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingBottom: "24px",
                borderBottom: "1px solid #e4e4e7",
                fontFamily: "JetBrains Mono",
                fontSize: 22,
              },
              children: [
                {
                  type: "span",
                  props: {
                    style: { color: "#0a0a0a", fontWeight: 500 },
                    children: handle,
                  },
                },
                {
                  type: "span",
                  props: {
                    style: { color: "#047857", fontWeight: 500 },
                    children: rightMeta,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: 1,
                paddingTop: "24px",
                paddingBottom: "24px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: titleSize,
                      fontWeight: 600,
                      lineHeight: 1.18,
                      letterSpacing: "-0.025em",
                      color: "#0a0a0a",
                    },
                    children: title,
                  },
                },
                ...(subtitle
                  ? [
                      {
                        type: "div",
                        props: {
                          style: {
                            marginTop: "20px",
                            fontSize: 25,
                            fontWeight: 400,
                            lineHeight: 1.45,
                            color: "#52525b",
                          },
                          children: subtitle,
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
          metrics.length > 0
            ? {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    gap: "18px",
                    width: "100%",
                  },
                  children: metrics.map(m => ({
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        background: "#f4f4f5",
                        borderRadius: "8px",
                        padding: "18px 22px",
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: {
                              fontFamily: "JetBrains Mono",
                              fontSize: 28,
                              fontWeight: 500,
                              color: "#0a0a0a",
                            },
                            children: m.value,
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: {
                              marginTop: "6px",
                              fontSize: 17,
                              color: "#71717a",
                              lineHeight: 1.3,
                            },
                            children: m.caption,
                          },
                        },
                      ],
                    },
                  })),
                },
              }
            : {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    paddingTop: "20px",
                    borderTop: "1px solid #e4e4e7",
                    fontFamily: "JetBrains Mono",
                    fontSize: 20,
                    color: "#71717a",
                  },
                  children: [
                    {
                      type: "span",
                      props: {
                        children: defaultFooterLeft,
                      },
                    },
                    {
                      type: "span",
                      props: {
                        style: { color: "#0a0a0a", fontWeight: 500 },
                        children:
                          footerRight ?? new URL(SITE.website).hostname,
                      },
                    },
                  ],
                },
              },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts,
    }
  );
}
