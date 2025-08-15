"use client";
import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(
  () => import("@/components/ui").then((e) => e.FaultyTerminal),
  { ssr: false }
);
export const Dynamic: React.FC = () => {
  return (
    <>
      <FaultyTerminal
        scale={2.9}
        gridMul={[2, 1]}
        digitSize={1.7}
        timeScale={1}
        pause={false}
        scanlineIntensity={1}
        glitchAmount={1}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#568F87"
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={false}
        brightness={1}
      />
    </>
  );
};
