"use client";
import { SplitText } from "@/components/ui";
import { useNavigation } from "@/hooks";
import { useExpand } from "@/hooks/use-expand";
import { PATHS } from "@/routes/paths";
import { useEffect } from "react";

export const RootPage: React.FC = () => {
  useExpand(true);
  const navigate = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate(PATHS.INFO, false);
    }, 2500);
  }, []);

  return (
    <>
      <SplitText
        text="Taha Nabavi"
        className="text-9xl"
        splitType="chars"
        ease="bounce.out"
        delay={110}
        duration={1.2}
        threshold={0.4}
      />
    </>
  );
};
