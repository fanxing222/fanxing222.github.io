"use client";

import { MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import { GradientText } from "@/components/shared/gradient-text";
import { GithubIcon } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";
import { skillCategories } from "@/data/skills";
import Link from "next/link";
import { Mail } from "lucide-react";
import * as LucideIcons from "lucide-react";

function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon ?? LucideIcons.Code;
}

export default function AboutPage() {
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
              <Link
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={`mailto:${siteConfig.author.email}`}
                className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Learning Journey */}
        <AnimatedSection delay={0.1}>
          <div className="mt-20">
            <SectionHeading
              title="学习成长"
              description="Learning Journey"
              className="text-left [&>div]:mx-0 [&>div]:mt-2"
            />
            <div className="relative mt-10">
              {/* Vertical timeline line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/25 via-border to-border/50" />

              <div className="space-y-10">
                {/* 1. 前端基础入门 */}
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border/70 bg-card shadow-sm">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                  </div>
                  <GlowCard className="flex-1">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">前端基础入门</h3>
                      <p className="text-xs text-muted-foreground">过去几个月</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        系统学习了 HTML、CSS、JavaScript 三件套，做了一些基础页面和交互练习。通过实际动手写页面，对前端开发有了基本的理解。
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <Badge variant="secondary" className="text-xs">HTML</Badge>
                        <Badge variant="secondary" className="text-xs">CSS</Badge>
                        <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                      </div>
                    </div>
                  </GlowCard>
                </div>

                {/* 2. 项目实战 */}
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border/70 bg-card shadow-sm">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                  </div>
                  <GlowCard className="flex-1">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">项目实战</h3>
                      <p className="text-xs text-muted-foreground">近期</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        用 Next.js 搭建了个人网站，用 Django 完成了文件管理系统。在项目中学到了前后端交互、数据库操作和部署上线的完整流程。
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <Badge variant="secondary" className="text-xs">Next.js</Badge>
                        <Badge variant="secondary" className="text-xs">Django</Badge>
                        <Badge variant="secondary" className="text-xs">Docker</Badge>
                      </div>
                    </div>
                  </GlowCard>
                </div>

                {/* 3. 后端深入学习 */}
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border/70 bg-card shadow-sm">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/20" />
                  </div>
                  <GlowCard className="flex-1">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">后端深入学习</h3>
                      <p className="text-xs text-muted-foreground">最近 · 进行中</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        正在学习 Spring Boot 和 MySQL，逐步搭建 Java Web 开发的知识体系。重点关注数据库设计、SQL 语句和前后端交互流程。
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <Badge variant="secondary" className="text-xs">Java</Badge>
                        <Badge variant="secondary" className="text-xs">Spring Boot</Badge>
                        <Badge variant="secondary" className="text-xs">MySQL</Badge>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20">
            <SectionHeading title="技术栈" className="text-left [&>div]:mx-0 [&>div]:mt-2" />
            <div className="mt-2 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category) => {
                const CategoryIcon = getIcon(category.icon);
                return (
                  <GlowCard key={category.name} variant="subtle">
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
                      {category.skills.map((s) => (
                        <Badge key={s.name} variant="secondary">
                          <i className={`${s.icon} mr-1 text-base`} />
                          {s.name}
                        </Badge>
                      ))}
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
