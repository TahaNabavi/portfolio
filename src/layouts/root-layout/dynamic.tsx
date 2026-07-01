"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FaultyTerminal = dynamic(
  () => import("@/components/ui").then((e) => e.FaultyTerminal),
  { ssr: false }
);

type BackgroundMode = "loading" | "static" | "animated";

function StaticBackground() {
  return (
    <div className="pointer-events-none relative h-full w-full overflow-hidden bg-[#090b0b]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(132,245,229,0.14),transparent_32%,rgba(86,143,135,0.08)_62%,transparent)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(132,245,229,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(132,245,229,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]" />
    </div>
  );
}

export const Dynamic: React.FC = () => {
  const [mode, setMode] = useState<BackgroundMode>("loading");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const narrowViewport = window.matchMedia("(max-width: 768px)").matches;
    const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4;

    setMode(prefersReducedMotion || coarsePointer || narrowViewport || lowMemory ? "static" : "animated");
  }, []);

  if (mode !== "animated") return <StaticBackground />;

  return (
    <>
      <FaultyTerminal
        scale={2.9}
        gridMul={[2, 1]}
        digitSize={1.7}
        timeScale={0.55}
        pause={false}
        scanlineIntensity={0.7}
        glitchAmount={0.7}
        flickerAmount={0.65}
        noiseAmp={0.75}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#568F87"
        mouseReact={true}
        mouseStrength={0.28}
        dpr={1}
        pageLoadAnimation={false}
        brightness={0.9}
      />
    </>
  );
};
