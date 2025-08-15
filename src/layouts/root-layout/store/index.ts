import { create } from "zustand";

type RootLayoutState = {
  isExpand: boolean;
  setIsExpand: (isExpand: boolean) => void;
};

export const useRootLayoutStore = create<RootLayoutState>((set) => ({
  isExpand: true,
  setIsExpand: (isExpand) => set({ isExpand }),
}));
