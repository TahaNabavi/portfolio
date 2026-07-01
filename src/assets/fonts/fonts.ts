import localFont from "next/font/local";

export const interEn = localFont({
  src: [
    {
      path: "./ttf/Inter-normal.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./ttf/Inter-italic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-inter-en",
  display: "swap",
});

export const monoEn = localFont({
  src: [
    {
      path: "./ttf/jetbrain.ttf",
      style: "normal",
    },
  ],
  variable: "--font-mono-en",
  display: "swap",
});

export const persianFa = localFont({
  src: [
    {
      path: "./woff/fa.woff2",
      style: "normal",
    },
  ],
  variable: "--font-persian-fa",
  display: "swap",
});
