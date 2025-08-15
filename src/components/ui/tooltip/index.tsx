"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { TooltipProps } from "./types";
import { cn } from "@/utils";
import { Portal } from "@/lib";

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = "top",
  closeDelay = 0,
  className,
  classNames,
  offset = 4,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: -1, left: -1 });
  const [shouldMeasure, setShouldMeasure] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => {
    setTimeout(() => {
      setVisible(false);
    }, closeDelay);
  };

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => {
        setShouldMeasure(true);
      });
    } else {
      setShouldMeasure(false);
    }
  }, [visible]);

  useLayoutEffect(() => {
    if (!shouldMeasure) return;

    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;
    if (!trigger || !tooltip) return;

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = 0;
    let left = 0;

    //*?  Handle tooltip position
    switch (placement) {
      case "top":
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + offset;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "left":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - offset;
        break;
      case "right":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + offset;
        break;
    }

    setPosition({ top, left });
  }, [shouldMeasure, placement, content, offset]);

  return (
    <div
      className={className}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div ref={triggerRef}>{children}</div>
      <AnimatePresence>
        {visible && (
          <Portal>
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "bg-neutral-900 fixed z-[99999] whitespace-nowrap rounded-md border border-white/10 px-3 py-2 text-sm text-white shadow-lg",
                classNames?.tooltip
              )}
              style={{
                top: position.top,
                left: position.left,
                visibility: shouldMeasure ? "visible" : "hidden",
                pointerEvents: shouldMeasure ? "auto" : "none",
              }}
            >
              {content}
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  );
};
