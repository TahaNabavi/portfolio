import { DocsPage } from "@/features/docs";

const Page = async ({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}) => {
  const { packageSlug } = await params;

  return <DocsPage packageSlug={packageSlug} />;
};

export default Page;
