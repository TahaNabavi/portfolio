import type { Metadata } from "next";
import "./globals.css";
import { RootLayout } from "@/layouts/root-layout";

export const metadata: Metadata = {
  title: "TahaNabavi",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
