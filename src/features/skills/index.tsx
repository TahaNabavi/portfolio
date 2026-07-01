"use client";

import { LinkIcon } from "@/components/shared/icons";
import type { Locale } from "@/config/i18n";
import { useExpand } from "@/hooks/use-expand";
import { projectCategories, ProjectItem } from "@/features/projects/constants";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";
import { skillsData } from "./constants";

type SkillCategoryKey = keyof typeof skillsData;
type SkillItem = (typeof skillsData)[SkillCategoryKey]["skills"][number];
type SelectedSkill = SkillItem & { categoryKey: SkillCategoryKey };

const categoryKeys = Object.keys(skillsData) as SkillCategoryKey[];
const defaultCategory: SkillCategoryKey = "frameworks";

const skillPriority = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next",
  "Node",
  "Express",
  "NestJS",
  "Laravel",
  "REST API",
  "Authentication",
  "Authorization / RBAC",
  "WebSocket / Socket.IO",
  "Socket",
  "Tailwind",
  "React Query / TanStack Query",
  "Zustand",
  "Framer Motion",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Prisma",
  "Database Design",
  "Query Optimization",
  "Docker",
  "Git",
  "GitHub",
  "Zod",
  "Type-safe APIs",
  "Playwright",
  "Dashboard Development",
  "Realtime Apps",
  "Developer Tools",
  "Package Development",
  "Performance Optimization",
  "SEO",
  "Team Management",
  "Time Management",
  "Adaptability",
  "Fast Learner",
  "Communication",
  "Problem Solving",
] as const;

const skillPriorityRank = new Map<string, number>(
  skillPriority.map((skill, index) => [skill, index]),
);

function getSortedSkills<T extends { name: string }>(skills: T[]) {
  return [...skills].sort((a, b) => {
    const rankA = skillPriorityRank.get(a.name) ?? Number.MAX_SAFE_INTEGER;
    const rankB = skillPriorityRank.get(b.name) ?? Number.MAX_SAFE_INTEGER;

    if (rankA !== rankB) return rankA - rankB;
    return a.name.localeCompare(b.name);
  });
}

const skillAliases: Record<string, string[]> = {
  CSS: ["CSS", "Tailwind", "Less", "Frontend"],
  HTML: ["HTML", "Frontend"],
  JavaScript: ["JavaScript", "JS", "Frontend"],
  TypeScript: ["TypeScript", "TS", "type-safe"],
  PHP: ["PHP", "Laravel"],
  Laravel: ["Laravel", "PHP"],
  React: ["React", "Frontend"],
  Next: ["Next", "Next.js"],
  Node: ["Node", "Node.js", "CLI", "Backend"],
  Express: ["Express", "Node", "Backend"],
  Tailwind: ["Tailwind", "CSS"],
  Socket: ["Socket", "Realtime"],
  Less: ["Less", "CSS"],
  MySQL: ["MySQL", "Database"],
  PostgreSQL: ["PostgreSQL", "Database"],
  Redis: ["Redis", "Cache"],
  Postman: ["Postman", "API", "HTTP Client"],
  Vercel: ["Vercel", "Deployment"],
  Git: ["Git", "GitHub"],
  Prisma: ["Prisma", "ORM", "Database"],
  "Discord JS": ["Discord JS", "Discord", "Node"],
};

const skillFocus: Record<string, string[]> = {
  TypeScript: ["Typed APIs", "contract inference", "package design"],
  JavaScript: ["interactive UI", "browser behavior", "tooling"],
  React: ["component systems", "stateful UI", "client experiences"],
  Next: ["routing", "full-stack UI", "deployment-ready apps"],
  Tailwind: ["responsive layout", "utility styling", "design systems"],
  Node: ["CLI tooling", "API services", "automation"],
  Socket: ["realtime dashboards", "live status", "event flows"],
  Prisma: ["schema modeling", "typed database access", "ORM workflows"],
  Git: ["version control", "collaboration", "release workflow"],
  "Team Management": ["planning work", "supporting teammates", "delivery focus"],
  "Time Management": ["prioritization", "focus blocks", "deadline awareness"],
  Adaptability: ["changing scope", "new tools", "practical decisions"],
  "Fast Learner": ["docs-first learning", "quick iteration", "self improvement"],
  Communication: ["clear updates", "team alignment", "asking better questions"],
  "Problem Solving": ["debugging", "root cause thinking", "practical tradeoffs"],
};

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

function getAllProjects(locale: Locale) {
  return projectCategories[locale].flatMap((category) => category.items);
}

function getSkillProjects(skillName: string, projects: ProjectItem[]) {
  const aliases = skillAliases[skillName] ?? [skillName];
  const normalizedAliases = aliases.map(normalize);

  return projects.filter((project) => {
    const haystack = normalize(
      [
        project.title,
        project.body,
        project.slug,
        project.tags.join(" "),
        project.links.github ?? "",
        project.links.docs ?? "",
        project.links.npm ?? "",
      ].join(" "),
    );

    return normalizedAliases.some((alias) => {
      if (!alias) return false;
      return haystack.split(" ").includes(alias) || haystack.includes(alias);
    });
  });
}

function getInitialSkill(): SelectedSkill {
  const firstCategory = defaultCategory;
  const firstSkill = getSortedSkills(skillsData[firstCategory].skills)[0];

  return {
    ...firstSkill,
    categoryKey: firstCategory,
  };
}

function SkillIconButton({
  active,
  skill,
  onClick,
}: {
  active: boolean;
  skill: SkillItem;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "pointer group relative flex min-h-16 w-full min-w-0 items-center gap-3 rounded-lg border p-3 text-left transition rtl:text-right",
        active
          ? "border-primary-1/60 bg-primary-1/10 text-white"
          : "border-white/10 bg-white/[0.03] text-white/70 hover:border-primary-1/40 hover:bg-white/[0.06]"
      )}
    >
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>
      <span className="min-w-0">
        <span className="block break-words font-mono text-sm leading-tight">{skill.name}</span>
        <span className="block break-words text-xs leading-5 text-white/35">
          {skillFocus[skill.name]?.[0] ?? "Applied in projects"}
        </span>
      </span>
      <span
        className="absolute inset-y-3 end-2 w-1 rounded-full opacity-0 transition group-hover:opacity-100"
        style={{ backgroundColor: skill.color }}
      />
    </button>
  );
}

function SkillDetail({
  projects,
  skill,
}: {
  projects: ProjectItem[];
  skill: SelectedSkill;
}) {
  const t = useTranslations("pages.skills");
  const focus = skillFocus[skill.name] ?? [
    "production UI",
    "developer workflow",
    "project delivery",
  ];

  return (
    <motion.aside
      key={`${skill.categoryKey}-${skill.name}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="min-h-0 rounded-xl border border-white/10 bg-black/25 p-5 lg:h-full lg:overflow-y-auto"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
            {t("detail.eyebrow")}
          </div>
          <h2 className="mt-2 break-words text-3xl md:text-4xl">{skill.name}</h2>
        </div>
        <div
          className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black"
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
      </div>

      <p className="mt-5 break-words text-sm leading-7 text-white/68">
        {t("detail.desc", { skill: skill.name })}
      </p>

      <div className="mt-6">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">
          {t("detail.focus")}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {focus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 break-words font-mono text-xs uppercase tracking-[0.18em] text-white/35">
            {t("detail.projects")}
          </div>
          <span className="rounded-full border border-primary-1/20 px-2 py-1 font-mono text-xs text-primary-1">
            {projects.length}
          </span>
        </div>

        <div className="mt-3 grid gap-3">
          {projects.length === 0 && (
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-white/50">
              {t("detail.noProjects")}
            </div>
          )}

          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="break-words font-mono text-lg">{project.title}</h3>
                  <p className="mt-1 line-clamp-2 break-words text-sm leading-6 text-white/55">
                    {project.body}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      className="pointer rounded-md border border-white/10 p-2 text-white/65 transition hover:border-primary-1 hover:text-primary-1"
                    >
                      <LinkIcon className="size-4" />
                    </Link>
                  )}
                  {project.links.docs && (
                    <Link
                      href={project.links.docs}
                      className="pointer rounded-md border border-primary-1/20 bg-primary-1/10 px-3 py-2 text-xs text-primary-1 transition hover:bg-primary-1/15"
                    >
                      Docs
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

export const SkillsPage: React.FC = () => {
  useExpand(true);
  const t = useTranslations("pages.skills");
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryKey>(defaultCategory);
  const [selectedSkill, setSelectedSkill] =
    useState<SelectedSkill>(getInitialSkill);

  const allProjects = useMemo(() => getAllProjects(locale), [locale]);
  const visibleSkills = useMemo(
    () => getSortedSkills(skillsData[activeCategory].skills),
    [activeCategory],
  );
  const linkedProjects = useMemo(
    () => getSkillProjects(selectedSkill.name, allProjects),
    [allProjects, selectedSkill.name],
  );

  const selectCategory = (key: SkillCategoryKey) => {
    const firstSkill = getSortedSkills(skillsData[key].skills)[0];

    setActiveCategory(key);
    setSelectedSkill({ ...firstSkill, categoryKey: key });
  };

  const totalSkills = categoryKeys.reduce(
    (sum, key) => sum + skillsData[key].skills.length,
    0,
  );
  const linkedSkills = categoryKeys
    .flatMap((key) => skillsData[key].skills)
    .filter((skill) => getSkillProjects(skill.name, allProjects).length > 0)
    .length;

  return (
    <main className="h-full min-h-0 w-full self-stretch overflow-hidden">
      <section className="mx-auto grid h-full min-h-0 w-full max-w-7xl gap-8 overflow-y-auto px-4 py-8 pb-28 lg:grid-cols-[minmax(0,1fr)_380px] lg:overflow-hidden">
        <div className="min-w-0 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:pe-1">
          <div className="grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-black/25 p-5 lg:sticky lg:top-0 lg:self-start"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary-1/70 bg-black">
                  <Image
                    src="/person.png"
                    alt="person"
                    width={64}
                    height={64}
                    className="scale-150"
                  />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                    {t("eyebrow")}
                  </div>
                  <h1 className="mt-1 break-words text-3xl font-bold">
                    {t("title")}
                  </h1>
                </div>
              </div>
              <p className="mt-5 break-words text-sm leading-7 text-white/65">{t("desc")}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="font-mono text-2xl text-primary-1">
                    {totalSkills}
                  </div>
                  <div className="text-xs text-white/45">{t("stats.skills")}</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="font-mono text-2xl text-primary-1">
                    {linkedSkills}
                  </div>
                  <div className="text-xs text-white/45">{t("stats.linked")}</div>
                </div>
              </div>
            </motion.div>

            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                {categoryKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => selectCategory(key)}
                    className={cn(
                      "pointer min-h-10 rounded-lg border px-4 py-2 font-mono text-sm leading-tight transition",
                      activeCategory === key
                        ? "border-primary-1/50 bg-primary-1/10 text-primary-1"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:border-primary-1/40 hover:text-primary-1"
                    )}
                  >
                    {t(`categories.${key}`)}
                  </button>
                ))}
              </div>

              <motion.div
                layout
                className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
              >
                {visibleSkills.map((skill) => (
                  <SkillIconButton
                    key={skill.name}
                    skill={skill}
                    active={
                      selectedSkill.name === skill.name &&
                      selectedSkill.categoryKey === activeCategory
                    }
                    onClick={() =>
                      setSelectedSkill({ ...skill, categoryKey: activeCategory })
                    }
                  />
                ))}
              </motion.div>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                  {t("matrix.eyebrow")}
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {categoryKeys.map((key) => (
                    <div
                      key={key}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="break-words font-mono">{t(`categories.${key}`)}</h3>
                        <span className="text-xs text-white/40">
                          {skillsData[key].skills.length}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {getSortedSkills(skillsData[key].skills).slice(0, 6).map((skill) => (
                          <span
                            key={skill.name}
                            className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/55"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-0 lg:h-full">
          <SkillDetail skill={selectedSkill} projects={linkedProjects} />
        </div>
      </section>
    </main>
  );
};
