import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-primary/60 to-primary/20" />
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}
