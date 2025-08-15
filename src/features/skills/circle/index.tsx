import { cn } from "@/utils";
import React from "react";
import { CircleProps } from "./types";
import { Tooltip } from "@/components/ui";

export const Circle = React.forwardRef<HTMLDivElement, CircleProps>(
  ({ className, style, children, name }, ref) => {
    return (
      <Tooltip content={name}>
        <div
          ref={ref}
          style={style}
          className={cn(
            "z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-black border-primary-1/50 p-3 cursor-pointer",
            className
          )}
        >
          {children}
        </div>
      </Tooltip>
    );
  }
);

Circle.displayName = "Circle";
