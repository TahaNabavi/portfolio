import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Documentation",
  path: "/docs/typefetch",
  description:
    "Developer documentation for Taha Nabavi's TypeScript packages, including typefetch and related tooling.",
  keywords: ["typefetch docs", "TypeScript package documentation", "Developer tools"],
});

const Page = () => {
  redirect("/docs/typefetch");
};

export default Page;
