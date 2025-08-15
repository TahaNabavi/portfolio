import { AnimatedBeam } from "@/components/ui";
import React from "react";

export const SkillBeam: React.FC<{
  data: {
    icon: React.JSX.Element;
    name: string;
    color: string;
  }[];
  refs: React.RefObject<HTMLDivElement[]>;
  toRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ data, refs, toRef, containerRef }) => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) return null;

  return (
    <>
      {data.map((e, i) => {
        const fromEl = refs.current[i];
        if (!fromEl || !toRef.current || !containerRef.current) return null;

        return (
          <AnimatedBeam
            key={`beam-${e.name}-${i}`}
            containerRef={containerRef}
            fromRef={{ current: fromEl }}
            toRef={toRef as React.RefObject<HTMLDivElement>}
            curvature={-75}
            endYOffset={-10}
          />
        );
      })}
    </>
  );
};
