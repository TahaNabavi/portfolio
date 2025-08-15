"use client";
import { AnimatedBeam, SplitText } from "@/components/ui";
import { useExpand } from "@/hooks/use-expand";
import Image from "next/image";
import React, { useRef } from "react";
import { skillsData } from "./constants";
import { SkillBox } from "./skill-box";
import { SkillBeam } from "./skill-beam";
import { useTranslations } from "next-intl";

export const SkillsPage: React.FC = () => {
  const t = useTranslations("pages.skills");
  useExpand(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const langRefs = useRef<HTMLDivElement[]>([]);
  const langRef = useRef<HTMLDivElement>(null);

  const frameRefs = useRef<HTMLDivElement[]>([]);
  const frameRef = useRef<HTMLDivElement>(null);

  const dbRefs = useRef<HTMLDivElement[]>([]);
  const dbRef = useRef<HTMLDivElement>(null);

  const etcRefs = useRef<HTMLDivElement[]>([]);
  const etcRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <div className="absolute inset-0 flex flex-wrap items-center justify-center z-10 top-50 mt-72 md:mt-5">
        <SkillBox
          title={skillsData.lang.title}
          data={skillsData.lang.skills}
          refBase={langRef}
          refs={langRefs}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-90"
        />
        <SkillBox
          title={skillsData.frameworks.title}
          data={skillsData.frameworks.skills}
          refBase={frameRef}
          refs={frameRefs}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-90"
        />
        <SkillBox
          title={skillsData.database.title}
          data={skillsData.database.skills}
          refBase={dbRef}
          refs={dbRefs}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-90"
        />
        <SkillBox
          title={skillsData.etc.title}
          data={skillsData.etc.skills}
          refBase={etcRef}
          refs={etcRefs}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-90"
        />
      </div>

      <div className="absolute top-10 xl:left-10 md:max-w-96 text-center w-full md:w-fit left-0">
        <div>
          <SplitText
            text={t("title")}
            splitType="words"
            className="text-2xl font-bold"
          />
        </div>
        <div>
          <SplitText text={t("desc")} splitType="lines" className="text-lg" />
        </div>
      </div>

      <div
        ref={mainRef}
        className="flex items-center mt-64 lg:left-[60%] xl:left-[55%] md:left-[65%] md:mt-5 justify-center bg-black backdrop-blur-3xl p-3 border-2 border-primary-1/80 z-10 rounded-full aspect-square overflow-hidden w-40 absolute top-0"
      >
        <Image
          src="/person.png"
          alt="person"
          width={80}
          height={80}
          className="scale-200"
        />
      </div>

      <SkillBeam
        data={skillsData.lang.skills}
        containerRef={containerRef}
        toRef={langRef}
        refs={langRefs}
      />
      <SkillBeam
        data={skillsData.frameworks.skills}
        containerRef={containerRef}
        toRef={frameRef}
        refs={frameRefs}
      />
      <SkillBeam
        data={skillsData.etc.skills}
        containerRef={containerRef}
        toRef={etcRef}
        refs={etcRefs}
      />
      <SkillBeam
        data={skillsData.database.skills}
        containerRef={containerRef}
        toRef={dbRef}
        refs={dbRefs}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dbRef}
        toRef={mainRef}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={etcRef}
        toRef={mainRef}
        curvature={75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={frameRef}
        toRef={mainRef}
        curvature={75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={langRef}
        toRef={mainRef}
        curvature={75}
        endYOffset={-10}
      />
    </div>
  );
};
