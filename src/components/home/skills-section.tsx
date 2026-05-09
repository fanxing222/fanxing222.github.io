"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";

const categories = [
  { key: "language", label: "编程语言" },
  { key: "framework", label: "框架" },
  { key: "tool", label: "工具" },
] as const;

function SkillBar({ name, icon, level }: { name: string; icon: string; level: number }) {
  return (
    <div className="flex items-center gap-3">
      <i className={`${icon} text-xl text-muted-foreground`} />
      <div className="flex-1">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-sm font-medium">{name}</span>
          <span className="text-xs tabular-nums text-muted-foreground">{level}%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
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

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat, catIndex) => (
            <AnimatedSection key={cat.key} delay={catIndex * 0.1}>
              <GlowCard>
                <h3 className="mb-6 font-heading text-lg font-semibold">{cat.label}</h3>
                <div className="space-y-5">
                  {skills
                    .filter((s) => s.category === cat.key)
                    .map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        level={skill.level}
                      />
                    ))}
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
