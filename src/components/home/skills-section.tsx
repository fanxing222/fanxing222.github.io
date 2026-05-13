"use client";

import * as LucideIcons from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";

function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon ?? LucideIcons.Code;
}

export function SkillsSection() {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="技术栈"
            description="我日常使用的技术和工具"
          />
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = getIcon(category.icon);
            return (
              <AnimatedSection key={category.name} delay={catIndex * 0.08}>
                <GlowCard variant="subtle">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <CategoryIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-1.5 rounded-md border border-border/30 px-2.5 py-1.5 text-xs transition-colors hover:border-border hover:bg-muted/50"
                      >
                        <i className={`${skill.icon} text-sm text-muted-foreground`} />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
