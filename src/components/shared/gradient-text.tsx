import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-amber-700 via-orange-500 to-rose-500 bg-clip-text text-transparent animate-gradient dark:from-amber-400 dark:via-orange-400 dark:to-rose-400",
        className
      )}
    >
      {children}
    </span>
  );
}
