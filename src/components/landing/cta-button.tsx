import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  variant?: "default" | "outline";
  className?: string;
  children: ReactNode;
}

export function CtaButton({
  href,
  variant = "outline",
  className,
  children,
}: CtaButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        "h-auto w-full justify-start rounded-none p-5 text-base leading-6 shadow-none sm:w-auto",
        className,
      )}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}
