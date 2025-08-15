import { useRootLayoutStore } from "@/layouts/root-layout/store";
import { useTransitionStore } from "@/providers/transition/store";
import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();
  const startTransition = useTransitionStore((state) => state.startTransition);
  const endTransition = useTransitionStore((state) => state.endTransition);
  const setRootExpanded = useRootLayoutStore((state) => state.setIsExpand);

  return (href: string, expand?: boolean, ms: number = 500) => {
    startTransition();
    if (expand !== undefined) setRootExpanded(expand);
    setTimeout(() => {
      router.push(href);
      setTimeout(() => {
        endTransition();
      }, ms / 2);
    }, ms / 2);
  };
};
