import { cn } from "@/lib/utils";

const sizes = {
  default: "text-title",
  sm: "text-title-sm",
  lg: "text-title-lg",
} as const;

interface SectionTitleProps {
  lines: string[];
  size?: keyof typeof sizes;
  className?: string;
}

export function SectionTitle({
  lines,
  size = "default",
  className,
}: SectionTitleProps) {
  return (
    <h2 className={cn(sizes[size], className)}>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h2>
  );
}
