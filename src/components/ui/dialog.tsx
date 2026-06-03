import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Dialog({ open, children }: { open: boolean; children: React.ReactNode }) {
  if (!open) return null;
  return <div className="dialog-root">{children}</div>;
}

export function DialogContent({
  className,
  onClose,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }) {
  return (
    <div className="dialog-backdrop">
      <div className={cn("dialog-content", className)} role="dialog" aria-modal="true" {...props}>
        {onClose ? (
          <button className="dialog-close" type="button" onClick={onClose} aria-label="Close dialog">
            <X aria-hidden="true" />
          </button>
        ) : null}
        {props.children}
      </div>
    </div>
  );
}

export const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("dialog-header", className)} {...props} />,
);
DialogHeader.displayName = "DialogHeader";

export const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h2 ref={ref} className={cn("dialog-title", className)} {...props} />,
);
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("dialog-description", className)} {...props} />,
);
DialogDescription.displayName = "DialogDescription";
