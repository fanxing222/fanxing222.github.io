"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ArchitectureDiagram, type ArchNode } from "@/components/projects/architecture-diagram";

const defaultArchNodes: ArchNode[] = [
  { label: "Client", icon: "Monitor", description: "Browser" },
  { label: "React / Next.js", icon: "Code", description: "Frontend" },
  { label: "Spring Boot", icon: "Server", description: "Backend API" },
  { label: "Redis", icon: "Database", description: "Cache Layer" },
  { label: "MySQL", icon: "HardDrive", description: "Persistence" },
];

export function ArchitectureSection() {
  return (
    <section className="py-20" id="architecture">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="系统架构"
            description="我正在学习的技术栈架构"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-xl border border-border/30 bg-muted/20 p-8">
            <ArchitectureDiagram nodes={defaultArchNodes} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
