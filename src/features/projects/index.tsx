"use client";

import { CometCard, SplitText } from "@/components/ui";
import { GithubIcon, LinkIcon } from "@/components/shared/icons";
import type { Locale } from "@/config/i18n";
import { useExpand } from "@/hooks/use-expand";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ProjectItem, projectCategories } from "./constants";
import { cn } from "@/utils";

type ProjectHoverSize = "third" | "half" | "full";

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

function StatusBadge({ data }: { data: ProjectItem }) {
  const label = data.version ? `v${data.version}` : data.status;

  return (
    <div
      className={cn(
        "absolute left-3 top-3 z-20 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.18em] backdrop-blur",
        data.status === "soon"
          ? "border-primary-1/40 bg-primary-1/15 text-primary-1 shadow-[0_0_30px_rgba(132,245,229,0.16)]"
          : "border-white/10 bg-black/55 text-primary-1"
      )}
    >
      {label}
    </div>
  );
}

function ProjectCard({
  data,
  getLinkLabel,
  isPackage,
  className,
  compact = false,
  hoverSize,
}: {
  data: ProjectItem;
  getLinkLabel: (key: keyof ProjectItem["links"]) => string;
  isPackage?: boolean;
  className?: string;
  compact?: boolean;
  hoverSize: ProjectHoverSize;
}) {
  const links = Object.entries(data.links).filter(([, href]) => Boolean(href));
  const hover = {
    full: {
      y: -3,
      rotateDepth: 5,
      translateDepth: 5,
      scale: 1.008,
      z: 12,
      glare: 0.28,
      imageScale: "group-hover:scale-[1.018]",
    },
    half: {
      y: -5,
      rotateDepth: 9,
      translateDepth: 9,
      scale: 1.018,
      z: 24,
      glare: 0.38,
      imageScale: "group-hover:scale-[1.035]",
    },
    third: {
      y: -8,
      rotateDepth: 13,
      translateDepth: 12,
      scale: 1.032,
      z: 34,
      glare: 0.48,
      imageScale: "group-hover:scale-105",
    },
  }[hoverSize];

  return (
    <CometCard
      className={cn("w-full", className)}
      rotateDepth={hover.rotateDepth}
      translateDepth={hover.translateDepth}
      hoverScale={hover.scale}
      hoverZ={hover.z}
      glareOpacity={hover.glare}
    >
      <motion.article
        layout
        whileHover={{ y: hover.y }}
        className={cn(
          "group cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#1F2121] text-white shadow-2xl shadow-black/20 transform-3d",
          compact
            ? "grid min-h-[220px] md:grid-cols-[260px_minmax(0,1fr)]"
            : "flex h-full min-h-[480px] flex-col p-3"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-black",
            compact
              ? "min-h-[180px] border-b border-white/5 md:min-h-0 md:border-b-0 md:border-e"
              : "rounded-xl border border-white/5"
          )}
        >
          <Image
            loading="lazy"
            className={cn(
              "w-full object-fill contrast-[88%] transition duration-700",
              compact ? "absolute inset-0 h-full" : "aspect-video",
              hover.imageScale
            )}
            alt={data.title}
            src={data.img}
            width={1080}
            height={720}
          />
          {data.status === "soon" && (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(132,245,229,0.22),transparent_44%),linear-gradient(180deg,transparent,rgba(0,0,0,0.68))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-xl border border-primary-1/25 bg-black/35 px-5 py-2 font-mono text-sm uppercase tracking-[0.35em] text-primary-1 shadow-[0_0_40px_rgba(132,245,229,0.14)] backdrop-blur">
                  Soon
                </span>
              </div>
            </>
          )}
          <StatusBadge data={data} />
        </div>

        <div className={cn("flex flex-1 flex-col font-mono", compact ? "p-4 md:p-5" : "p-3")}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-[0.22em] text-white/35">
                  {data.status}
                </span>
              </div>
              <h3 className={cn("mt-2 break-words leading-tight", compact ? "text-xl md:text-2xl" : "text-2xl")}>
                {data.title}
              </h3>
            </div>
            <div className="flex max-w-full flex-wrap gap-2">
              {data.install && (
                <code className="max-w-full overflow-x-auto rounded-md border border-primary-1/20 bg-black/30 px-2 py-1 text-xs text-primary-1">
                  {data.install}
                </code>
              )}
              {links.length === 0 && (
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/45">
                  Private dashboard
                </span>
              )}
            </div>
          </div>
          <p
            className={cn(
              "mt-3 text-sm font-light leading-6 text-white/75",
              compact && "md:line-clamp-2"
            )}
          >
            {data.body}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {(compact ? data.tags.slice(0, 6) : data.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {links.map(([key, href]) => (
              <ActionLink
                key={key}
                href={href as string}
                label={getLinkLabel(key as keyof ProjectItem["links"])}
                strong={isPackage && (key === "docs" || key === "npm")}
              />
            ))}
          </div>
        </div>
      </motion.article>
    </CometCard>
  );
}

function getProjectLayout(total: number, index: number) {
  const mdLastRowCount = total % 2;
  const xlLastRowCount = total % 3;
  const isMdLastSingle = mdLastRowCount === 1 && index === total - 1;
  const isXlLastSingle = xlLastRowCount === 1 && index === total - 1;
  const isXlLastPair = xlLastRowCount === 2 && index >= total - 2;

  return {
    className: cn(
      isMdLastSingle ? "md:w-full" : "md:w-[calc(50%-20px)]",
      isXlLastSingle
        ? "xl:w-full"
        : isXlLastPair
          ? "xl:w-[calc(50%-20px)]"
          : "xl:w-[calc(33.333%-28px)]"
    ),
    compact: isMdLastSingle || isXlLastSingle,
    hoverSize: isXlLastSingle ? "full" : isXlLastPair ? "half" : "third",
  };
}

function PackagePreview({
  data,
  getLinkLabel,
}: {
  data: ProjectItem;
  getLinkLabel: (key: keyof ProjectItem["links"]) => string;
}) {
  const links = Object.entries(data.links).filter(([, href]) => Boolean(href));

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.006 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="group grid overflow-hidden rounded-xl border border-white/10 bg-black/25 md:grid-cols-[220px_minmax(0,1fr)]"
    >
      <div className="relative min-h-[150px] overflow-hidden border-b border-white/10 bg-black md:border-b-0 md:border-e">
        <Image
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-[1.018]"
          alt={data.title}
          src={data.img}
          width={640}
          height={360}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(132,245,229,0.22),transparent_42%),linear-gradient(135deg,rgba(0,0,0,0.1),rgba(0,0,0,0.78))]" />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary-1">
              {data.status}
            </div>
            <h3 className="mt-2 break-words font-mono text-xl">{data.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50">
            WIP
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-white/58">
          {data.body}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {links.map(([key, href]) => (
            <ActionLink
              key={key}
              href={href as string}
              label={getLinkLabel(key as keyof ProjectItem["links"])}
            />
          ))}
        </div>
      </div>
    </motion.article>
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

      <CometCard
        className="w-full"
        rotateDepth={6}
        translateDepth={6}
        hoverScale={1.01}
        hoverZ={16}
        glareOpacity={0.32}
      >
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
  const locale = useLocale() as Locale;
  const categories = projectCategories[locale] ?? projectCategories.en;
  const packageCategory = categories.find((category) => category.id === "packages");
  const secondaryPackages = packageCategory?.items.slice(1) ?? [];
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

      {secondaryPackages.length > 0 && (
        <section className="mx-auto mb-14 w-full max-w-7xl px-4">
          <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                {t("morePackages.eyebrow")}
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl">
                {t("morePackages.title")}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/55 md:text-right rtl:md:text-left">
              {t("morePackages.body")}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {secondaryPackages.map((item) => (
              <PackagePreview
                key={item.slug}
                data={item}
                getLinkLabel={getLinkLabel}
              />
            ))}
          </div>
        </section>
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
              {category.items.map((item, itemIndex) => {
                const layout = getProjectLayout(category.items.length, itemIndex);

                return (
                  <ProjectCard
                    key={item.slug}
                    data={item}
                    getLinkLabel={getLinkLabel}
                    isPackage={category.id === "packages"}
                    className={layout.className}
                    // compact={layout.compact}
                    hoverSize={layout.hoverSize as ProjectHoverSize}
                  />
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
};
