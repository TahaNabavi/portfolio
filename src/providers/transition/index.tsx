"use client";
import React, { PropsWithChildren } from "react";
import { useTransitionStore } from "./store";
import { AnimatePresence, motion } from "framer-motion";

const TransitionOverlay: React.FC = () => {
  const isTransitioning = useTransitionStore((state) => state.isTransitioning);
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-black backdrop-blur-3xl
                     bg-[url('/noise.svg')] bg-repeat 
                     mix-blend-overlay pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};

export const TransitionProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <TransitionOverlay />
      {children}
    </>
  );
};
