import { ProjectsPage } from "@/features/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Browse Taha Nabavi's projects, including production dashboards, personal products, realtime apps, developer packages, and TypeScript tooling.",
  keywords: ["Taha Nabavi projects", "Next.js projects", "TypeScript packages", "Developer portfolio"],
});

const Page = () => {
  return <ProjectsPage />;
};

export default Page;
