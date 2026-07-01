import { env } from "@/config/env";
import { inter, monoEn, persian } from "@/config/fonts";
import TRANSLATION from "@/config/i18n";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { Dynamic } from "./dynamic";
import { TransitionProvider } from "@/providers";
import React from "react";
import { MainBox } from "./main-box";
import Navbar from "@/components/layouts/navbar";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = TRANSLATION.resolveLocale(cookieStore.get("LOCALE")?.value);
  const language = TRANSLATION.getLanguage(locale);

  return (
    <html lang={locale} dir={language.rtl ? "rtl" : "ltr"}>
      <head>
        {env.NODE_ENV === "development" && (
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${monoEn.variable} ${persian.variable} antialiased text-white`}
        style={
          {
            "--app-font-family": language.fonts.body,
          } as React.CSSProperties
        }
      >
        <NextIntlClientProvider>
          <Navbar />
          <div className="w-full h-dvh relative flex items-center justify-center">
            <Dynamic />
            <MainBox>
              <TransitionProvider>{children}</TransitionProvider>
            </MainBox>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
