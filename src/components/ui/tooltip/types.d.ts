export type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
  closeDelay?: number;
  classNames?: {
    tooltip?: string;
  };
  offset?: number;
};
