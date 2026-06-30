"use client";

import { CometCard, SplitText } from "@/components/ui";
import { GithubIcon, LinkIcon } from "@/components/shared/icons";
import { useExpand } from "@/hooks/use-expand";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ProjectItem, projectCategories } from "./constants";

function ActionLink({
  href,
  label,
  strong,
}: {
  href: string;
  label: string;
  strong?: boolean;
}) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={
        strong
          ? "pointer inline-flex h-9 items-center gap-2 rounded-md bg-white px-3 text-sm font-bold text-black transition hover:bg-primary-1"
          : "pointer inline-flex h-9 items-center gap-2 rounded-md border border-white/10 px-3 text-sm text-white/85 transition hover:border-primary-1 hover:text-primary-1"
      }
    >
      {label === "GitHub" ? <GithubIcon className="size-4" /> : <LinkIcon className="size-4" />}
      {label}
    </Link>
  );
}

function ProjectCard({
  data,
  getLinkLabel,
  isPackage,
}: {
  data: ProjectItem;
  getLinkLabel: (key: keyof ProjectItem["links"]) => string;
  isPackage?: boolean;
}) {
  return (
    <CometCard className="w-full md:w-[calc(50%-20px)] xl:w-[calc(33.333%-28px)]">
      <motion.article
        layout
        whileHover={{ y: -8 }}
        className="flex h-full min-h-[480px] cursor-pointer flex-col rounded-2xl border border-white/5 bg-[#1F2121] p-3 text-white shadow-2xl shadow-black/20 transform-3d"
      >
        <div className="relative overflow-hidden rounded-xl border border-white/5 bg-black">
          <Image
            loading="lazy"
            className="aspect-video w-full object-cover contrast-[88%] transition duration-500 hover:scale-105"
            alt={data.title}
            src={data.img}
            width={1080}
            height={720}
          />
          <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary-1 backdrop-blur">
            {data.version ? `v${data.version}` : data.status}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-3 font-mono">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-2xl leading-tight">{data.title}</h3>
            {data.install && (
              <code className="max-w-full rounded-md border border-primary-1/20 bg-black/30 px-2 py-1 text-xs text-primary-1">
                {data.install}
              </code>
            )}
          </div>
          <p className="mt-3 text-sm font-light leading-6 text-white/75">{data.body}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {Object.entries(data.links).map(([key, href]) => {
              if (!href) return null;

              return (
                <ActionLink
                  key={key}
                  href={href}
                  label={getLinkLabel(key as keyof ProjectItem["links"])}
                  strong={isPackage && (key === "docs" || key === "npm")}
                />
              );
            })}
          </div>
        </div>
      </motion.article>
    </CometCard>
  );
}

function FeaturedPackage({
  data,
  getLinkLabel,
}: {
  data: ProjectItem;
  getLinkLabel: (key: keyof ProjectItem["links"]) => string;
}) {
  const t = useTranslations("pages.projects");

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mx-auto mb-14 w-full max-w-7xl px-4"
    >
      <div className="mb-5 flex flex-col gap-2 border-b border-primary-1/20 pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
            {t("featured.eyebrow")}
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl">
            {t("sections.packages.title")}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/65 md:text-right rtl:md:text-left">
          {t("sections.packages.body")}
        </p>
      </div>

      <CometCard className="w-full">
        <article className="relative grid min-h-[360px] overflow-hidden rounded-2xl border border-primary-1/20 bg-[#1F2121] text-white shadow-2xl shadow-black/25 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="relative min-h-[260px] overflow-hidden bg-black">
            <Image
              loading="lazy"
              className="absolute inset-0 h-full w-full object-fill opacity-55"
              alt={data.title}
              src={data.img}
              width={1080}
              height={720}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(132,245,229,0.32),transparent_36%),linear-gradient(135deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
            <div className="absolute left-5 top-5 rounded-full border border-primary-1/30 bg-black/45 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-1 backdrop-blur">
              {t("featured.latest", { version: data.version ?? "stable" })}
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 font-mono md:p-8">
            <div className="text-sm uppercase tracking-[0.24em] text-primary-1">
              {t("featured.kind")}
            </div>
            <h3 className="mt-3 break-words text-3xl leading-tight md:text-5xl">
              {data.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              {data.body}
            </p>

            {data.install && (
              <code className="mt-5 w-fit max-w-full overflow-x-auto rounded-lg border border-primary-1/20 bg-black/35 px-3 py-2 text-sm text-primary-1">
                {data.install}
              </code>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {Object.entries(data.links).map(([key, href]) => {
                if (!href) return null;

                return (
                  <ActionLink
                    key={key}
                    href={href}
                    label={getLinkLabel(key as keyof ProjectItem["links"])}
                    strong={key === "docs" || key === "npm"}
                  />
                );
              })}
            </div>
          </div>
        </article>
      </CometCard>
    </motion.section>
  );
}

export const ProjectsPage: React.FC = () => {
  useExpand(true);
  const t = useTranslations("pages.projects");
  const locale = useLocale() as "en" | "ge";
  const categories = projectCategories[locale] ?? projectCategories.en;
  const packageCategory = categories.find((category) => category.id === "packages");
  const visibleCategories = categories.filter((category) => category.id !== "packages");
  const getLinkLabel = (key: keyof ProjectItem["links"]) => t(`links.${key}`);

  return (
    <main className="w-full min-h-max self-start pb-28">
      <section className="relative flex w-full flex-col items-center px-4 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 rounded-full border border-primary-1/20 bg-primary-1/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-primary-1"
        >
          {t("eyebrow")}
        </motion.div>
        <SplitText text={t("title")} className="text-5xl md:text-7xl" />
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
          {t("desc")}
        </p>
      </section>

      {packageCategory?.items[0] && (
        <FeaturedPackage
          data={packageCategory.items[0]}
          getLinkLabel={getLinkLabel}
        />
      )}

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4">
        {visibleCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
            className="w-full"
          >
            <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                  {t(`sections.${category.id}.eyebrow`)}
                </div>
                <h2 className="mt-2 text-3xl md:text-4xl">
                  {t(`sections.${category.id}.title`)}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-white/60 md:text-right rtl:md:text-left">
                {t(`sections.${category.id}.body`)}
              </p>
            </div>

            <div className="flex flex-wrap gap-10">
              {category.items.map((item) => (
                <ProjectCard
                  key={item.slug}
                  data={item}
                  getLinkLabel={getLinkLabel}
                  isPackage={category.id === "packages"}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
};
