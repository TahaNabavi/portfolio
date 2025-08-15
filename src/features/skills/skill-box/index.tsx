import { Circle } from "@/features/skills/circle";
import { cn } from "@/utils";

export const SkillBox: React.FC<{
  title: string;
  data: {
    icon: React.JSX.Element;
    name: string;
    color: string;
  }[];
  refs: React.RefObject<HTMLDivElement[]>;
  refBase: React.RefObject<HTMLDivElement | null>;
  className?: string;
}> = ({ data, refs, refBase, title, className }) => {
  return (
    <div
      className={cn(
        "relative inset-0 flex items-center justify-center z-10",
        className
      )}
    >
      <div className="relative w-full h-full">
        {data.map((e, i) => {
          return (
            <div
              key={e.name ?? i}
              className="absolute translate-[-50%]"
              style={{
                left: `${Math.floor(50 + 35 * Math.cos((i / data.length) * Math.PI * 2))}%`,
                top: `${Math.floor(50 + 35 * Math.sin((i / data.length) * Math.PI * 2))}%`,
              }}
            >
              <Circle
                name={e.name}
                style={{
                  color: e.color,
                }}
                ref={(el) => {
                  if (el) {
                    refs.current[i] = el;
                  }
                }}
              >
                {e.icon}
              </Circle>
            </div>
          );
        })}
      </div>
      <div
        className="absolute p-2 rounded-lg bg-black font-bold tracking-wide border-2 border-primary/70"
        ref={refBase}
      >
        {title}
      </div>
    </div>
  );
};
