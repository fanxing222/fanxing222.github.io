"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-400",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
