import { SkillsPage } from "@/features/skills";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skills",
  path: "/skills",
  description:
    "Explore Taha Nabavi's technical skill set across TypeScript, React, Next.js, Node.js, databases, realtime systems, and developer tooling.",
  keywords: ["Taha Nabavi skills", "TypeScript", "React", "Next.js", "Node.js"],
});

const Page = () => {
  return <SkillsPage />;
};

export default Page;
