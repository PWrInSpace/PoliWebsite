import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className="px-gutter py-section">
      <div
        className={cn(
          "mx-auto flex w-full max-w-[81rem] flex-col gap-12",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}
