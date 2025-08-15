import { useRootLayoutStore } from "@/layouts/root-layout/store";
import { useLayoutEffect } from "react";

export const useExpand = (def: boolean) => {
  const setRootExpand = useRootLayoutStore((state) => state.setIsExpand);

  useLayoutEffect(() => {
    setRootExpand(def);
  }, []);

  return (expand: boolean) => {
    setRootExpand(expand);
  };
};
