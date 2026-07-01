"use client";
import { AnimatedTestimonials, SplitText } from "@/components/ui";
import { useExpand } from "@/hooks/use-expand";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { feedbackData } from "./constatns";

const quoteWords = feedbackData.reduce(
  (sum, item) => sum + item.quote.split(/\s+/).length,
  0,
);

export const FeedbackPage: React.FC = () => {
  useExpand(true);
  const t = useTranslations("pages.feedback");

  return (
    <main className="h-full min-h-0 w-full self-stretch overflow-hidden">
      <section className="mx-auto grid h-full min-h-0 w-full max-w-7xl gap-8 overflow-y-auto px-4 py-8 pb-28 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-xl border border-white/10 bg-black/25 p-5 text-center md:p-7"
          >
            <div className="mx-auto w-fit rounded-full border border-primary-1/20 bg-primary-1/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
              {t("eyebrow")}
            </div>
            <SplitText text={t("title")} className="mt-4 text-5xl md:text-7xl" />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              {t("desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-8 rounded-xl border border-white/10 bg-[#1F2121] shadow-2xl shadow-black/25"
          >
            <AnimatedTestimonials testimonials={feedbackData} autoplay />
          </motion.div>
        </div>

        <aside className="min-h-0 lg:h-full">
          <div className="grid gap-4 lg:sticky lg:top-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-xl border border-white/10 bg-black/25 p-5"
            >
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                {t("snapshot.eyebrow")}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="font-mono text-2xl text-primary-1">
                    {feedbackData.length}
                  </div>
                  <div className="text-xs text-white/45">
                    {t("snapshot.people")}
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <div className="font-mono text-2xl text-primary-1">
                    {quoteWords}
                  </div>
                  <div className="text-xs text-white/45">
                    {t("snapshot.words")}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="rounded-xl border border-white/10 bg-black/25 p-5"
            >
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
                {t("people.eyebrow")}
              </div>
              <div className="mt-4 grid gap-3">
                {feedbackData.map((item, index) => (
                  <div
                    key={item.name}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="break-words font-mono text-sm text-white">
                          {item.name}
                        </h3>
                        <p className="mt-1 break-words text-xs leading-5 text-white/45">
                          {item.designation}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-primary-1/20 px-2 py-1 font-mono text-xs text-primary-1">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </aside>
      </section>
    </main>
  );
};
