import { ImageResponse } from "next/og";
import { absoluteUrl } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Taha Nabavi - Full-stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const portrait = absoluteUrl("/person.png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: 64,
          color: "white",
          background:
            "radial-gradient(circle at 20% 10%, rgba(132,245,229,0.26), transparent 32%), radial-gradient(circle at 78% 25%, rgba(132,245,229,0.18), transparent 30%), linear-gradient(135deg, #101314 0%, #1F2121 58%, #0b0d0d 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 690,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#84f5e5",
            }}
          >
            <span>Taha Nabavi</span>
            <span>Portfolio</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                maxWidth: 690,
                fontSize: 76,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: 0,
              }}
            >
              Full-stack Web Developer
            </div>
            <div
              style={{
                maxWidth: 650,
                fontSize: 29,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Type-safe web products, dashboards, realtime apps, and developer tools.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 24,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <span>TypeScript</span>
            <span>/</span>
            <span>Next.js</span>
            <span>/</span>
            <span>Node.js</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            width: 340,
            height: "100%",
            borderRadius: 32,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(0,0,0,0.32)",
            boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
          }}
        >
          <img
            src={portrait}
            alt="Taha Nabavi"
            width={340}
            height={502}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center bottom",
              filter: "saturate(1.04) contrast(1.02)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.16) 55%, rgba(0,0,0,0.72) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              bottom: 24,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 800 }}>Taha Nabavi</span>
            <span style={{ fontSize: 20, color: "#84f5e5" }}>
              Full-stack Web Developer
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
