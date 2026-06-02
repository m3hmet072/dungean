import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => (
    <label className={cn("checkbox-row", className)} htmlFor={id}>
      <span className="checkbox-shell">
        <input ref={ref} id={id} type="checkbox" {...props} />
        <span className="checkbox-control">
          <Check aria-hidden="true" />
        </span>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  ),
);

Checkbox.displayName = "Checkbox";
