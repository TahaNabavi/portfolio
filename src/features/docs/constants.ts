import docsContent from "./content.json";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string };

export type DocSection = {
  slug: string;
  title: string;
  description: string;
  blocks: DocBlock[];
};

export type VersionDoc = {
  version: string;
  title: string;
  sections: DocSection[];
};

export type PackageDoc = {
  slug: string;
  name: string;
  summary: string;
  latestVersion: string;
  install: string;
  github: string;
  npm: string;
  sections: DocSection[];
  versions: VersionDoc[];
};

export type DocsLocale = "en" | "ge";

export type DocsDictionary = {
  packages: PackageDoc[];
};

export const docsByLocale = docsContent as Record<DocsLocale, DocsDictionary>;

export const getPackageDocs = (locale: string) =>
  docsByLocale[locale as DocsLocale]?.packages ?? docsByLocale.en.packages;

export const getPackageDoc = (locale: string, slug: string) =>
  getPackageDocs(locale).find((item) => item.slug === slug);
