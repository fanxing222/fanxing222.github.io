"use client";

import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import { GradientText } from "@/components/shared/gradient-text";
import { GithubIcon } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import { skills } from "@/data/skills";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const experience = [
  {
    title: "高级 Java 开发工程师",
    company: "某科技公司",
    period: "2023 - 至今",
    description:
      "负责核心微服务架构设计和开发，优化系统性能，带领团队完成多个关键项目。",
  },
  {
    title: "Java 开发工程师",
    company: "某互联网公司",
    period: "2021 - 2023",
    description:
      "参与电商平台后端开发，负责订单系统和支付模块的设计与实现。",
  },
  {
    title: "初级开发工程师",
    company: "某软件公司",
    period: "2019 - 2021",
    description:
      "参与企业级应用开发，学习和实践 Java 技术栈，积累项目经验。",
  },
];

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

        {/* Experience */}
        <AnimatedSection delay={0.1}>
          <div className="mt-20">
            <SectionHeading title="工作经历" className="text-left [&>div]:mx-0 [&>div]:mt-2" />
            <div className="mt-2 space-y-4">
              {experience.map((exp, index) => (
                <GlowCard key={index}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading font-semibold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </GlowCard>
              ))}
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
