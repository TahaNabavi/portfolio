"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { useRootLayoutStore } from "@/layouts/root-layout/store";
import clsx from "clsx";

export const MainBox: React.FC<PropsWithChildren> = ({ children }) => {
  const expanded = useRootLayoutStore((state) => state.isExpand);

  return (
    <div
      className={clsx(
        "absolute flex items-center justify-center backdrop-blur-md border-4 border-white/5 p-3 overflow-y-auto transition-all",
        expanded ? "w-full h-full" : "w-full h-full md:w-[90%] md:h-[90%] rounded-3xl"
      )}
    >
      {children}
    </div>
  );
};
