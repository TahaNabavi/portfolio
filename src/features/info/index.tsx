"use client";

import { TextType } from "@/components/ui";
import { ArmIcon, LinkIcon, MugIcon } from "@/components/shared/icons";
import { useNavigation } from "@/hooks";
import { useExpand } from "@/hooks/use-expand";
import { PATHS } from "@/routes/paths";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { email, experienceKeys, funText, socialData, yearsExp } from "./constants";

const buildKeys = ["packages", "dashboards", "motion"] as const;
const styleKeys = ["systems", "typeSafety", "experience"] as const;

const SocialCard: React.FC<{ data: (typeof socialData)[number] }> = ({
  data,
}) => {
  return (
    <Link
      href={data.link}
      target={data.link.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="pointer group min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary-1/40 hover:bg-white/[0.06]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black transition group-hover:scale-105"
          style={{ color: data.color }}
        >
          {data.icon}
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-sm text-white">{data.name}</span>
          <span className="block truncate text-xs text-white/45">{data.id}</span>
        </span>
      </div>
    </Link>
  );
};

const Trex: React.FC = () => {
  const t = useTranslations("pages.info");

  return (
    <div className="pointer-events-none absolute bottom-4 left-4 hidden lg:block">
      <Image width={50} height={50} alt="" src="/trex.png" />
      <div className="absolute -top-8 left-10 w-max max-w-[360px]">
        <div className="relative z-10 rounded-md border-2 border-white/5 bg-neutral-900 p-2 text-sm">
          <TextType
            text={funText.map((key) => t(key))}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="absolute bottom-6 left-2 size-3 rotate-45 rounded border border-white/30 bg-neutral-900" />
      </div>
    </div>
  );
};

function InfoCard({
  body,
  title,
}: {
  body: string;
  title: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
    >
      <h3 className="font-mono text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
    </motion.article>
  );
}

function ExperienceSection() {
  const t = useTranslations("pages.info");

  return (
    <section className="mt-8">
      <div className="mb-4 flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
            {t("experience.eyebrow")}
          </div>
          <h2 className="mt-2 text-2xl leading-tight md:text-3xl">
            {t("experience.title")}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/55 md:text-right rtl:md:text-left">
          {t("experience.desc")}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/25 p-4 md:p-5">
        <div className="pointer-events-none absolute inset-x-8 -top-20 h-40 rounded-full bg-primary-1/10 blur-3xl" />
        <div className="relative grid gap-4">
          {experienceKeys.map((key, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group grid gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary-1/35 hover:bg-white/[0.05] md:grid-cols-[120px_minmax(0,1fr)]"
            >
              <div className="flex items-start gap-3 md:block">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary-1/25 bg-primary-1/10 font-mono text-sm text-primary-1 transition group-hover:scale-105">
                  0{index + 1}
                </div>
                <div className="min-w-0 md:mt-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-white/38">
                    {t(`experience.items.${key}.kind`)}
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="break-words font-mono text-xl text-white">
                      {t(`experience.items.${key}.role`)}
                    </h3>
                    <p className="mt-1 text-sm text-primary-1/85">
                      {t(`experience.items.${key}.place`)}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/50">
                    {t(`experience.items.${key}.status`)}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-white/62">
                  {t(`experience.items.${key}.body`)}
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {[0, 1, 2].map((point) => (
                    <div
                      key={point}
                      className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-xs leading-5 text-white/58"
                    >
                      {t(`experience.items.${key}.points.${point}`)}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08 }}
      className="group pointer relative overflow-hidden rounded-xl border border-white/10 bg-black/30 p-3 transition duration-500 hover:-translate-y-1 hover:border-primary-1/45 hover:bg-white/[0.04] hover:shadow-[0_28px_80px_rgba(0,0,0,0.45),0_0_42px_rgba(132,245,229,0.12)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-8 -top-16 h-40 rounded-full bg-primary-1/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(132,245,229,0.16),transparent_42%)]" />
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
        <Image
          src="/person.png"
          alt="Taha Nabavi"
          fill
          priority
          sizes="(min-width: 1024px) 360px, 92vw"
          className="object-cover object-bottom saturate-[0.9] transition duration-700 group-hover:scale-[1.045] group-hover:saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/82" />
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.13)_42%,transparent_54%)] translate-x-[-70%] transition duration-700 group-hover:translate-x-[70%]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-primary-1/25" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
            <h2 className="font-mono text-2xl font-bold leading-none text-white">
              Taha Nabavi
            </h2>
            <p className="mt-2 text-sm text-white/58 transition group-hover:text-primary-1">
              Full-stack Web Developer
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 transition group-hover:border-primary-1/25">
          <span className="block text-xs text-white/45">Stack</span>
          <span className="mt-1 block font-mono text-sm text-white">
            Next.js / TS
          </span>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 transition group-hover:border-primary-1/25">
          <span className="block text-xs text-white/45">Focus</span>
          <span className="mt-1 block font-mono text-sm text-white">
            UI Systems
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export const InfoPage: React.FC = () => {
  useExpand(true);
  const t = useTranslations("pages.info");
  const navigate = useNavigation();

  return (
    <main className="relative h-full min-h-0 w-full self-stretch overflow-hidden">
      <Trex />

      <div className="mx-auto grid h-full min-h-0 w-full max-w-7xl gap-8 overflow-y-auto px-4 py-8 pb-28 lg:grid-cols-[minmax(0,1fr)_380px]">
        <section className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-xl border border-white/10 bg-black/25 p-5 md:p-7"
          >
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
              {t("eyebrow")}
            </div>
            <h1 className="mt-3 max-w-4xl break-words text-4xl leading-tight md:text-6xl">
              {t("hero")}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
              {t("desc", { years: yearsExp })}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <button
                onClick={() => navigate(PATHS.SKILLS)}
                className="pointer inline-flex min-h-12 items-center gap-2 rounded-lg border border-primary-1/30 bg-primary-1/10 px-5 font-mono text-sm text-primary-1 transition hover:bg-primary-1/15"
              >
                <ArmIcon fontSize={22} />
                {t("btn.skill")}
              </button>
              <button
                onClick={() => navigate(PATHS.PROJECTS)}
                className="pointer inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/10 bg-white px-5 font-mono text-sm font-bold text-black transition hover:bg-primary-1"
              >
                <LinkIcon className="size-5" />
                {t("btn.projects")}
              </button>
              <Link
                href={email}
                className="pointer inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/10 px-5 font-mono text-sm text-white/75 transition hover:border-primary-1 hover:text-primary-1"
              >
                <MugIcon fontSize={22} />
                {t("btn.hire")}
              </Link>
            </div>
          </motion.div>

          <section className="mt-8">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
              {t("build.eyebrow")}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {buildKeys.map((key) => (
                <InfoCard
                  key={key}
                  title={t(`build.${key}.title`)}
                  body={t(`build.${key}.body`)}
                />
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                {t("style.eyebrow")}
              </div>
              <div className="mt-4 grid gap-4">
                {styleKeys.map((key) => (
                  <InfoCard
                    key={key}
                    title={t(`style.${key}.title`)}
                    body={t(`style.${key}.body`)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                {t("social.eyebrow")}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {socialData.slice(0, 3).map((item) => (
                  <SocialCard key={item.name} data={item} />
                ))}
              </div>
            </div>
          </section>

          <ExperienceSection />

          <section className="mt-8">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
              {t("social.more")}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socialData.slice(3).map((item) => (
                <SocialCard key={item.name} data={item} />
              ))}
            </div>
          </section>

        </section>

        <aside className="min-h-0 lg:h-full">
          <div className="lg:sticky lg:top-0">
            <PortraitCard />
            <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-5">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                {t("snapshot.eyebrow")}
              </div>
              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-white/55">{t("snapshot.focus")}</span>
                  <span className="text-right font-mono text-sm text-white">
                    {t("snapshot.focusValue")}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-white/55">{t("snapshot.stack")}</span>
                  <span className="text-right font-mono text-sm text-white">
                    TypeScript / Next.js
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-white/55">{t("snapshot.mode")}</span>
                  <span className="text-right font-mono text-sm text-white">
                    {t("snapshot.modeValue")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
