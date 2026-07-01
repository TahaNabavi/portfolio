import { InfoPage } from "@/features/info";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  path: "/info",
  description:
    "Learn about Taha Nabavi, a full-stack web developer focused on type-safe systems, animated frontend experiences, dashboards, and developer tools.",
  keywords: ["About Taha Nabavi", "Full-stack web developer", "Web product developer"],
});

const Page = () => {
  return <InfoPage />;
};

export default Page;
