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
import { useRouter } from "next/navigation";

function Btn({
  name,
  svg: Svg,
  img,
  onClick,
}: {
  name: string;
  svg?: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  onClick: () => void;
  img?: React.ReactNode;
}) {
  return (
    <div className="mx-2">
      <Tooltip content={name}>
        <button
          onClick={onClick}
          className="w-[50px] h-[50px] border-2 rounded-2xl border-white/5 pointer group relative flex items-center justify-center overflow-hidden hover:text-primary-1 bg-neutral-900"
        >
          {Svg && <Svg fontSize={25} />}
          {img && img}
          <div className="group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all absolute h-0 w-0 bg-primary-1/15 rounded-full"></div>
        </button>
      </Tooltip>
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("layouts.navbar");
  const navigate = useNavigation();
  const locale = useLocale();

  const langChangeHandler = () => {
    const lang =
      (Cookie.get("LOCALE") as
        | (typeof TRANSLATION.langs)[number]
        | undefined) || TRANSLATION.default;
    if (lang === "ge") {
      Cookie.set("LOCALE", "en");
      window.location.reload();
    } else {
      Cookie.set("LOCALE", "ge");
      window.location.reload();
    }
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
          className="h-[68px] rounded-3xl border-2 border-white/5 relative py-3 flex items-center justify-center bg-neutral-900"
        >
          <Btn
            name={t("info")}
            onClick={() => {
              navigate(PATHS.INFO);
            }}
            svg={HomeIcon}
          />
          <Btn
            name={t("skills")}
            onClick={() => {
              navigate(PATHS.SKILLS);
            }}
            svg={ArmIcon}
          />
          <Btn
            name={t("projects")}
            onClick={() => {
              navigate(PATHS.PROJECTS);
            }}
            svg={BoxIcon}
          />
          <Btn
            name={t("feedback")}
            onClick={() => {
              navigate(PATHS.FEEDBACK);
            }}
            svg={MessageIcon}
          />
          <Btn
            name={t("language")}
            onClick={langChangeHandler}
            img={
              <Image
                src={`/locales/${
                  locale as (typeof TRANSLATION.langs)[number]
                }.png`}
                alt=""
                width="24"
                height="24"
              />
            }
          />
        </motion.div>
      </div>
    </>
  );
}
