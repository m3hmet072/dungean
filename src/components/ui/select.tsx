import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <span className="select-wrap">
      <select ref={ref} className={cn("select", className)} {...props}>
        {children}
      </select>
      <ChevronDown aria-hidden="true" className="select-icon" />
    </span>
  ),
);

Select.displayName = "Select";
