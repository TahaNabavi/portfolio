import { env } from "@/config/env";
import { inter } from "@/config/fonts";
import { NextIntlClientProvider } from "next-intl";
import { Dynamic } from "./dynamic";
import { TransitionProvider } from "@/providers";
import React from "react";
import { MainBox } from "./main-box";
import Navbar from "@/components/layouts/navbar";

export const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {env.NODE_ENV === "development" && (
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
          />
        )}
      </head>
      <body className={`${inter.variable} antialiased text-white`}>
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
};
