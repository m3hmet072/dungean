import * as React from "react";
import { cn } from "../../lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      aria-orientation={orientation}
      className={cn("separator", orientation === "vertical" && "separator-vertical", className)}
      role="separator"
      {...props}
    />
  ),
);

Separator.displayName = "Separator";
