import type { Metadata } from "next";
import "./globals.css";
import { RootLayout } from "@/layouts/root-layout";
import { absoluteUrl, createPageMetadata, seoConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.url),
  ...createPageMetadata({ path: "/" }),
  applicationName: seoConfig.name,
  authors: [{ name: seoConfig.name, url: seoConfig.url }],
  creator: seoConfig.name,
  publisher: seoConfig.name,
  category: "portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: absoluteUrl("/person.png"),
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
