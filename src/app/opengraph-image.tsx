import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Sacramento Tabernacle — A place of becoming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await readFile(
    join(process.cwd(), "public/fonts/oook-medium.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#e2e4c3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
          fontFamily: "Oook, serif",
        }}
      >
        {/* Ambient washes */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background: "#adcbc3",
            opacity: 0.35,
            filter: "blur(120px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: "#c5b98d",
            opacity: 0.3,
            filter: "blur(100px)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#374129",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "rgba(44, 40, 37, 0.55)",
              display: "flex",
            }}
          >
            Launching January 2027
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "150px",
            lineHeight: 0.95,
            color: "#2c2825",
            fontWeight: 500,
          }}
        >
          A place of&nbsp;
          <span style={{ color: "#374129", display: "flex" }}>becoming.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: "22px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "rgba(44, 40, 37, 0.5)",
          }}
        >
          Sacramento Tabernacle
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Oook",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
