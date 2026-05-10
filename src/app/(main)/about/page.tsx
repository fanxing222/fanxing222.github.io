"use client";

import { MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import { GradientText } from "@/components/shared/gradient-text";
import { GithubIcon } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import { skills } from "@/data/skills";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function AboutPage() {
  const languageSkills = skills.filter((s) => s.category === "language");
  const frameworkSkills = skills.filter((s) => s.category === "framework");
  const toolSkills = skills.filter((s) => s.category === "tool");

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Hero */}
        <AnimatedSection>
          <div className="flex flex-col items-center text-center">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-xl" />
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                <div className="flex h-full w-full items-center justify-center font-heading text-4xl font-bold text-muted-foreground">
                  {siteConfig.name.charAt(0)}
                </div>
              </div>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold">
              关于 <GradientText>{siteConfig.name}</GradientText>
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>中国</span>
              <span className="mx-2 text-border">·</span>
              <Briefcase className="h-4 w-4" />
              <span>{siteConfig.status}</span>
            </div>
            {/* 社交按钮区域 */}
            <div className="mt-6 flex gap-3">

              {/* GitHub */}
              <Link
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
      inline-flex items-center rounded-md border
      border-border bg-background px-4 py-2
      text-sm font-medium transition-colors
      hover:bg-accent hover:text-accent-foreground
    "
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>

              {/* Email */}
              <Link
                href={`mailto:${siteConfig.author.email}`}
                className="
      inline-flex items-center rounded-md border
      border-border bg-background px-4 py-2
      text-sm font-medium transition-colors
      hover:bg-accent hover:text-accent-foreground
    "
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>

            </div>
          </div>
        </AnimatedSection>

        {/* Internship Experience */}
        <AnimatedSection delay={0.1}>
          <div className="mt-20">
            <SectionHeading
              title="实习经历"
              description="Internship Experience"
              className="text-left [&>div]:mx-0 [&>div]:mt-2"
            />
            <div className="relative mt-10">
              {/* Vertical timeline line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/25 via-border to-border/50" />

              <div className="space-y-10">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border/70 bg-card shadow-sm">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary/20" />
                    </div>

                    {/* Placeholder card */}
                    <GlowCard className="flex-1">
                      <div className="space-y-3">
                        {/* Position title */}
                        <div className="h-5 w-3/5 animate-pulse rounded-md bg-muted" />
                        {/* Organization */}
                        <div className="h-4 w-2/5 animate-pulse rounded-md bg-muted/70" />
                        {/* Date */}
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 animate-pulse rounded-full bg-muted/60" />
                          <div className="h-3 w-20 animate-pulse rounded-sm bg-muted/60" />
                        </div>
                        {/* Description lines */}
                        <div className="space-y-2 pt-1">
                          <div className="h-3 w-full animate-pulse rounded-sm bg-muted/50" />
                          <div className="h-3 w-5/6 animate-pulse rounded-sm bg-muted/50" />
                          <div className="h-3 w-3/4 animate-pulse rounded-sm bg-muted/40" />
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20">
            <SectionHeading title="技术栈" className="text-left [&>div]:mx-0 [&>div]:mt-2" />
            <div className="mt-2 grid gap-6 md:grid-cols-3">
              <GlowCard>
                <h3 className="mb-4 font-heading font-semibold">编程语言</h3>
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((s) => (
                    <Badge key={s.name} variant="secondary">
                      <i className={`${s.icon} mr-1 text-base`} />
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </GlowCard>
              <GlowCard>
                <h3 className="mb-4 font-heading font-semibold">框架</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworkSkills.map((s) => (
                    <Badge key={s.name} variant="secondary">
                      <i className={`${s.icon} mr-1 text-base`} />
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </GlowCard>
              <GlowCard>
                <h3 className="mb-4 font-heading font-semibold">工具</h3>
                <div className="flex flex-wrap gap-2">
                  {toolSkills.map((s) => (
                    <Badge key={s.name} variant="secondary">
                      <i className={`${s.icon} mr-1 text-base`} />
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </GlowCard>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
