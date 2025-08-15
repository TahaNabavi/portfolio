import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./ttf/ubuntu.ttf",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
