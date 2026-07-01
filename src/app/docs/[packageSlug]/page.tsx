import { DocsPage } from "@/features/docs";
import { getPackageDoc, getPackageDocs } from "@/features/docs/constants";
import { createPageMetadata } from "@/lib/seo";
import { cookies } from "next/headers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}) {
  const { packageSlug } = await params;
  const cookieStore = await cookies();
  const locale = cookieStore.get("LOCALE")?.value || "en";
  const doc = getPackageDoc(locale, packageSlug) ?? getPackageDocs(locale)[0];

  return createPageMetadata({
    title: `${doc.name} Documentation`,
    path: `/docs/${doc.slug}`,
    description: doc.summary,
    keywords: [doc.name, `${doc.name} docs`, "TypeScript package", "API documentation"],
  });
}

export function generateStaticParams() {
  return getPackageDocs("en").map((doc) => ({
    packageSlug: doc.slug,
  }));
}

const Page = async ({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}) => {
  const { packageSlug } = await params;

  return <DocsPage packageSlug={packageSlug} />;
};

export default Page;
