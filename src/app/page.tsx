import { RootPage } from "@/features/root";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  path: "/",
});

const Page = () => {
  return <RootPage />;
};

export default Page;
