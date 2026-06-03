import * as React from "react";
import { cn } from "../../lib/utils";

type DropdownContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <DropdownContext.Provider value={{ open, setOpen }}>{children}</DropdownContext.Provider>;
}

export function DropdownMenuTrigger({ children }: { children: React.ReactElement<{ onClick?: React.MouseEventHandler }> }) {
  const context = React.useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenuTrigger must be used inside DropdownMenu");
  return React.cloneElement(children, {
    onClick: (event: React.MouseEvent) => {
      children.props.onClick?.(event);
      context.setOpen(!context.open);
    },
  });
}

export function DropdownMenuContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DropdownContext);
  if (!context || !context.open) return null;
  return <div className={cn("dropdown-content", className)} {...props} />;
}

export function DropdownMenuItem({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(DropdownContext);
  return (
    <button
      className={cn("dropdown-item", className)}
      type="button"
      onClick={(event) => {
        props.onClick?.(event);
        context?.setOpen(false);
      }}
      {...props}
    />
  );
}
