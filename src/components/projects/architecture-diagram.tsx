"use client";

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/shared/animated-section";

export interface ArchNode {
  label: string;
  icon: string;
  description?: string;
}

interface ArchitectureDiagramProps {
  nodes: ArchNode[];
  className?: string;
}

function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon ?? LucideIcons.Box;
}

export function ArchitectureDiagram({ nodes, className }: ArchitectureDiagramProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-0", className)}>
      {nodes.map((node, i) => {
        const Icon = getIcon(node.icon);
        const isLast = i === nodes.length - 1;

        return (
          <AnimatedSection key={node.label} delay={i * 0.08} className="flex items-center">
            <div className="arch-connector flex flex-col items-center gap-2 rounded-lg border border-border/40 bg-card px-4 py-3 min-w-[100px]">
              <Icon className="h-5 w-5 text-primary/70" />
              <span className="text-xs font-medium text-center whitespace-nowrap">{node.label}</span>
              {node.description && (
                <span className="text-[10px] text-muted-foreground text-center leading-tight">
                  {node.description}
                </span>
              )}
            </div>

            {/* Arrow connector */}
            {!isLast && (
              <div className="hidden md:flex items-center mx-1">
                <div className="h-px w-6 bg-border" />
                <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-border" />
              </div>
            )}
            {!isLast && (
              <div className="flex md:hidden items-center justify-center my-1">
                <div className="w-px h-6 bg-border" />
                <div className="absolute w-0 h-0 border-x-[4px] border-x-transparent border-t-[6px] border-t-border" />
              </div>
            )}
          </AnimatedSection>
        );
      })}
    </div>
  );
}
