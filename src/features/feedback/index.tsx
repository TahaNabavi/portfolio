"use client";
import { SplitText } from "@/components/ui";
import { useExpand } from "@/hooks/use-expand";
import { useTranslations } from "next-intl";
import { feedbackData } from "./constatns";
import { AnimatedTestimonials } from "@/components/ui";

export const FeedbackPage: React.FC = () => {
  useExpand(false);
  const t = useTranslations("pages.feedback");
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center py-10">
        <SplitText text={t("title")} className="text-5xl" />
      </div>
        <AnimatedTestimonials testimonials={feedbackData} />
    </div>
  );
};
