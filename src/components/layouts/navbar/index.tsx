"use client";

import { Tooltip } from "@/components/ui";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useNavigation } from "@/hooks";
import { PATHS } from "@/routes/paths";
import {
  ArmIcon,
  BoxIcon,
  HomeIcon,
  MessageIcon,
} from "@/components/shared/icons";
import Cookie from "js-cookie";
import TRANSLATION from "@/config/i18n";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";

const dockButtonMotion = {
  rest: { y: 0, scale: 1 },
  hover: { y: -9, scale: 1.12 },
  tap: { y: -2, scale: 0.94 },
};

function Btn({
  name,
  svg: Svg,
  img,
  onClick,
  active = false,
}: {
  name: string;
  svg?: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  onClick: () => void;
  img?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div className="mx-2">
      <Tooltip content={name}>
        <motion.button
          onClick={onClick}
          variants={dockButtonMotion}
          initial="rest"
          animate={active ? { y: -5, scale: 1.07 } : "rest"}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className={cn(
            "w-[50px] h-[50px] border-2 rounded-2xl pointer group relative flex items-center justify-center overflow-hidden hover:text-primary-1 bg-neutral-900 transition-colors shadow-black/25",
            active
              ? "border-primary-1/70 bg-primary-1/10 text-primary-1 shadow-[0_0_24px_rgba(132,245,229,0.22)]"
              : "border-white/5 shadow-lg"
          )}
          aria-pressed={active}
        >
          <motion.span
            className="relative z-10 flex items-center justify-center"
            animate={active ? { rotate: [0, -7, 7, 0] } : { rotate: 0 }}
            transition={
              active
                ? { duration: 0.6, ease: "easeInOut", delay: 0.05 }
                : { duration: 0.2 }
            }
          >
            {Svg && <Svg fontSize={25} />}
            {img && img}
          </motion.span>
          {active && (
            <motion.div
              layoutId={`dock-active-${name}`}
              className="absolute inset-1 rounded-[14px] bg-primary-1/15"
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            />
          )}
          <motion.div
            className="absolute rounded-full bg-primary-1/15"
            initial={false}
            variants={{
              rest: { width: 0, height: 0, opacity: 0 },
              hover: { width: 64, height: 64, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
          />
          <span
            className={cn(
              "absolute -bottom-1 h-1 rounded-full bg-primary-1 transition-all",
              active ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
            )}
          />
        </motion.button>
      </Tooltip>
    </div>
  );
}

function LanguagePicker({
  locale,
  onChange,
}: {
  locale: string;
  onChange: (lang: (typeof TRANSLATION.langs)[number]) => void;
}) {
  const activeLocale = TRANSLATION.resolveLocale(locale);
  const activeLanguage = TRANSLATION.languages[activeLocale];

  return (
    <div className="group relative mx-2">
      <div className="absolute bottom-full left-1/2 z-20 mb-3 flex -translate-x-1/2 translate-y-2 flex-col-reverse gap-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {TRANSLATION.langs.map((lang, index) => {
          const language = TRANSLATION.languages[lang];
          const isActive = lang === activeLocale;

          return (
            // <Tooltip key={lang} content={language.nativeLabel}>
              <motion.button
                onClick={() => onChange(lang)}
                initial={false}
                animate={{ y: 0, scale: 1 }}
                whileHover={{ x: 0, scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 24,
                  delay: index * 0.02,
                }}
                className={cn(
                  "pointer flex h-[46px] w-[46px] items-center justify-center rounded-2xl border-2 bg-neutral-900 shadow-lg shadow-black/25 transition-colors",
                  isActive
                    ? "border-primary-1/70 bg-primary-1/10"
                    : "border-white/5 hover:border-primary-1/45 hover:bg-white/[0.06]",
                )}
                aria-pressed={isActive}
              >
                <Image
                  src={language.icon}
                  alt={language.label}
                  width="24"
                  height="24"
                  className="rounded-sm"
                />
              </motion.button>
            // </Tooltip>
          );
        })}
      </div>

      <Tooltip content={activeLanguage.nativeLabel}>
        <motion.button
          variants={dockButtonMotion}
          initial="rest"
          animate={{ y: -5, scale: 1.07 }}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className="pointer group/button relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-2xl border-2 border-primary-1/70 bg-primary-1/10 text-primary-1 shadow-[0_0_24px_rgba(132,245,229,0.22)]"
          aria-haspopup="menu"
          aria-label={activeLanguage.label}
        >
          <span className="relative z-10 flex items-center justify-center">
            <Image
              src={activeLanguage.icon}
              alt={activeLanguage.label}
              width="24"
              height="24"
              className="rounded-sm"
            />
          </span>
          <span className="absolute inset-1 rounded-[14px] bg-primary-1/15" />
          <span className="absolute -bottom-1 h-1 w-5 rounded-full bg-primary-1" />
        </motion.button>
      </Tooltip>
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("layouts.navbar");
  const navigate = useNavigation();
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { name: t("info"), href: PATHS.INFO, svg: HomeIcon },
    { name: t("skills"), href: PATHS.SKILLS, svg: ArmIcon },
    { name: t("projects"), href: PATHS.PROJECTS, svg: BoxIcon },
    { name: t("feedback"), href: PATHS.FEEDBACK, svg: MessageIcon },
  ];

  const isActivePath = (href: string) =>
    pathname === href || (href !== PATHS.ROOT && pathname.startsWith(`${href}/`));

  const langChangeHandler = (lang: (typeof TRANSLATION.langs)[number]) => {
    if (lang === locale) return;

    Cookie.set("LOCALE", lang);
    window.location.reload();
  };

  return (
    <>
      <div className="fixed bottom-0 z-50 flex justify-center items-center w-dvw pb-2">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-[68px] rounded-3xl border-2 border-white/5 relative py-3 flex items-center justify-center bg-neutral-900 shadow-2xl shadow-black/30"
        >
          {navItems.map((item) => (
            <Btn
              key={item.href}
              name={item.name}
              active={isActivePath(item.href)}
              onClick={() => {
                if (!isActivePath(item.href)) navigate(item.href);
              }}
              svg={item.svg}
            />
          ))}
          <div
            className="ms-1 flex items-center border-s border-white/10 ps-1"
            aria-label={t("language")}
          >
            <LanguagePicker locale={locale} onChange={langChangeHandler} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
