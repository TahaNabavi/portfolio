"use client";
import { CometCard, SplitText } from "@/components/ui";
import { useExpand } from "@/hooks/use-expand";
import { useLocale, useTranslations } from "next-intl";
import { projectData } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "@/components/shared/icons";

const Card: React.FC<{ data: (typeof projectData)["en"][number] }> = ({
  data,
}) => {
  const t = useTranslations("pages.projects");
  return (
    <CometCard className="w-4/5 lg:w-2/5 xl:w-3/12 h-auto">
      <div className="flex w-full cursor-pointer h-full flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-4 transform-3d transform-none">
        <div className="mx-2 flex-1">
          <div className="relative mt-2 w-full">
            <Image
              loading="lazy"
              className="inset-0 aspect-video w-full rounded-[16px] bg-black object-cover contrast-[85%]"
              alt={data.title}
              src={data.img}
              width={1080}
              height={720}
            />
          </div>
        </div>
        <div className="mt-2 text-left rtl:text-right p-4 font-mono text-white">
          <div className="text-2xl">{data.title}</div>
          <div className="opacity-80 text-sm font-light">{data.body}</div>
          <div className="flex w-full mt-3 justify-between">
            {data.link.length !== 0 && (
              <Link
                href={data.link}
                target="__blank"
                className="flex gap-2 items-center hover:underline pointer"
              >
                <LinkIcon className="text-primary-1" />
                {t("btn.try")}
              </Link>
            )}
            {data.github.length !== 0 && (
              <Link
                href={data.github}
                target="__blank"
                className="bg-white px-2 py-1 rounded-md text-black font-bold tracking-wide flex gap-2 items-center ms-auto pointer"
              >
                <GithubIcon />
                {t("btn.github")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </CometCard>
  );
};

export const ProjectsPage: React.FC = () => {
  useExpand(true);
  const t = useTranslations("pages.projects");
  const locale = useLocale();
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center py-10">
        <SplitText text={t("title")} className="text-5xl" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center pb-10">
        {projectData[locale as "en"].map((e,i) => (
          <Card data={e} key={`${e.title}-${i}`} />
        ))}
      </div>
    </div>
  );
};
