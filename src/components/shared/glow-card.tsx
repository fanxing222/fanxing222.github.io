"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle";
}

export function GlowCard({ children, className, variant = "default" }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border bg-card p-6 transition-all duration-300",
        variant === "default" &&
          "border-border/60 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5",
        variant === "subtle" &&
          "border-border/40 hover:border-border",
        className
      )}
    >
      {children}
    </div>
  );
}
