"use client";

import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { Testimonial } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/shared/icons";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto w-full px-4 py-8 font-sans antialiased md:px-7 md:py-10">
      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="min-w-0">
          <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-white/10 bg-black sm:h-[420px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full object-cover object-center saturate-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/50" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex min-w-0 flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
              Testimonial
            </div>
            <h3 className="mt-3 break-words text-3xl font-bold text-white md:text-5xl">
              {testimonials[active].name}
            </h3>
            <p className="mt-2 break-words text-sm text-white/45">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 rounded-xl border border-white/10 bg-black/25 p-5 text-base leading-8 text-white/72 md:text-lg">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex items-center gap-3 pt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="pointer group/button flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition hover:border-primary-1/40 hover:bg-white/[0.06]"
            >
              <ArrowLeftIcon className="size-5 text-white/70 transition-transform duration-300 group-hover/button:rotate-12 group-hover/button:text-primary-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="pointer group/button flex size-10 items-center justify-center rounded-lg border border-primary-1/25 bg-primary-1/10 transition hover:bg-primary-1/15"
            >
              <ArrowRightIcon className="size-5 text-primary-1 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
            <div className="ms-auto font-mono text-xs text-white/35">
              {active + 1}/{testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
