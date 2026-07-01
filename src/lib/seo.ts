import type { Metadata } from "next";

function normalizeSiteUrl(url?: string) {
  if (!url) return "https://tahanabavi.ir";

  const normalized = url.startsWith("http") ? url : `https://${url}`;
  return normalized.replace(/\/$/, "");
}

const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL,
);

export const seoConfig = {
  name: "Taha Nabavi",
  title: "Taha Nabavi - Full-stack Web Developer",
  description:
    "Portfolio of Taha Nabavi, a full-stack web developer building type-safe web products, developer tools, dashboards, realtime apps, and polished frontend experiences.",
  url: siteUrl,
  locale: "en_US",
  alternateLocale: "de_DE",
  handle: "@TahaNabavi",
  keywords: [
    "Taha Nabavi",
    "Full-stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Developer Tools",
    "Dashboard Development",
  ],
  links: {
    github: "https://github.com/TahaNabavi",
    npm: "https://www.npmjs.com/~tahanabavi",
    docs: "/docs/typefetch",
  },
  image: "/opengraph-image",
};

export const absoluteUrl = (path = "/") => new URL(path, seoConfig.url).toString();

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = seoConfig.image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} | ${seoConfig.name}` : seoConfig.title;
  const pageDescription = description || seoConfig.description;
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...seoConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      siteName: seoConfig.name,
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      locale: seoConfig.locale,
      alternateLocale: [seoConfig.alternateLocale],
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
      site: seoConfig.handle,
      creator: seoConfig.handle,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "og:image:secure_url": imageUrl,
      "og:image:type": "image/png",
      "twitter:domain": new URL(seoConfig.url).hostname,
      "twitter:url": canonical,
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: seoConfig.name,
  url: seoConfig.url,
  image: absoluteUrl("/person.png"),
  jobTitle: "Full-stack Web Developer",
  sameAs: [seoConfig.links.github, seoConfig.links.npm],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Web dashboards",
    "Developer tooling",
    "Realtime applications",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: seoConfig.name,
  url: seoConfig.url,
  description: seoConfig.description,
  publisher: {
    "@type": "Person",
    name: seoConfig.name,
  },
};
