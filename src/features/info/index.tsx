"use client";
import { ProfileCard, SplitText, TextType } from "@/components/ui";
import { useTranslations } from "next-intl";
import { email, funText, socialData, yearsExp } from "./constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useExpand } from "@/hooks/use-expand";
import { Magnet } from "@/components/ui";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArmIcon, MugIcon } from "@/components/shared/icons";
import { useNavigation } from "@/hooks";
import { PATHS } from "@/routes/paths";

const SocialBtn: React.FC<{ data: (typeof socialData)[number] }> = ({
  data,
}) => {
  const [see, setSee] = useState(false);

  const Show = () => {
    return see ? data.icon : "";
  };

  useEffect(() => {
    if (see === false) {
      setTimeout(() => setSee(true), 100);
    }
  }, [see]);

  const onHover = () => setSee((g) => !g);

  return (
    <div className="py-2 px-4 w-full" onMouseEnter={onHover}>
      <div className="w-full h-16 relative">
        <div
          className="absolute -lef-4 top-0 h-full w-[4px] rounded bg-oapcity-60 backdrop-blur-md"
          style={{
            boxShadow: `3px -1px 7px 0px ${data.color}`,
            background: data.color,
          }}
        />
        <div className="flex ms-4 mt-4">
          <div style={{ color: data.color }} className="w-6">
            <Show />
          </div>
          <div className="text-xl f-carvin ms-[3px]">{data.name}</div>
        </div>
        <Link
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap text-ellipsis text overflow-hidden ms-4 w-full block underline opacity-60 hover:opacity-90 transition-all pointer"
        >
          {data.id}
        </Link>
      </div>
    </div>
  );
};

const Trex: React.FC = () => {
  const t = useTranslations("pages.info");
  return (
    <>
      <div className="absolute -bottom-3 -left-3 invisible lg:visible">
        <Image width={50} height={50} alt="" src="/trex.png" className="" />
        <div className="absolute -top-7 left-11 w-max">
          <div className="m-3 bg-neutral-900 rounded-md w-fit p-2 border-2 border-white/5 z-10 relative">
            <TextType
              text={funText.map((e) => t(e))}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="▎"
            />
          </div>
          <div className="w-3 h-3 bg-neutral-900 border border-white/30 absolute bottom-6 left-1.5 rotate-45 rounded"></div>
        </div>
      </div>
    </>
  );
};

export const InfoPage: React.FC = () => {
  useExpand(false);

  const t = useTranslations("pages.info");

  const navigate = useNavigation();

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-around">
        <Trex />
        <div className="w-full max-w-3xl text-center lg:text-left lg:rtl:text-right px-3 mb-10 lg:mb-0">
          <SplitText text={t("title")} className="text-4xl" />
          <div className="text-left rtl:text-right ms-2 rtl:ml-2">
            <SplitText
              className="text-xl opacity-80"
              splitType="lines"
              delay={200}
              text={t("desc", { years: yearsExp })}
            />
          </div>
          <div className="w-full flex gap-16 mt-10 justify-center lg:justify-start lg:rtl:justify-end">
            <Magnet padding={20}>
              <ShimmerButton
                borderRadius="20px"
                shimmerColor="#568F87"
                onClick={() => navigate(PATHS.SKILLS)}
                className="pointer"
              >
                <span className="whitespace-pre-wrap text-center text-xl text-white font-extrabold tracking-wider flex gap-2 items-center">
                  <ArmIcon fontSize={26} color="#84f5e5" />
                  {t("btn.skill")}
                </span>
              </ShimmerButton>
            </Magnet>
            <Magnet padding={20}>
              <Link href={email}>
                <ShimmerButton
                  borderRadius="20px"
                  shimmerColor="#568F87"
                  className="pointer"
                >
                  <span className="whitespace-pre-wrap text-center text-xl text-white font-extrabold tracking-wider flex gap-2 items-center">
                    <MugIcon fontSize={26} color="#84f5e5" />
                    {t("btn.hire")}
                  </span>
                </ShimmerButton>
              </Link>
            </Magnet>
          </div>
          <div className="grid grid-cols-3 mt-10">
            {socialData.map((e) => (
              <SocialBtn data={e} key={`social-btns-${e.name}`} />
            ))}
          </div>
        </div>
        <ProfileCard
          name="Taha Nabavi"
          title="Web Developer"
          avatarUrl="/person.png"
          grainUrl="/iconpattern.png"
          showUserInfo={false}
        />
        <div className="py-10 text-transparent">.</div>
      </div>
    </>
  );
};
