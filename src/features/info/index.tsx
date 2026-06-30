"use client";

import { ProfileCard, TextType } from "@/components/ui";
import { ArmIcon, LinkIcon, MugIcon } from "@/components/shared/icons";
import { useNavigation } from "@/hooks";
import { useExpand } from "@/hooks/use-expand";
import { PATHS } from "@/routes/paths";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { email, funText, socialData, yearsExp } from "./constants";

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
                {socialData.map((item) => (
                  <SocialCard key={item.name} data={item} />
                ))}
              </div>
            </div>
          </section>
        </section>

        <aside className="min-h-0 lg:h-full">
          <div className="lg:sticky lg:top-0">
            <ProfileCard
              name="Taha Nabavi"
              title="Full-stack Web Developer"
              avatarUrl="/person.png"
              grainUrl="/iconpattern.png"
              showUserInfo={false}
            />
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
