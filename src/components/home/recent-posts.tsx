"use client";

import Link from "next/link";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GlowCard } from "@/components/shared/glow-card";
import { blogs } from "@/data/blogs";

// 平台颜色映射
const platformColors: Record<string, string> = {
  CSDN: "bg-red-500/10 text-red-500 border-red-500/20",
  Juejin: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Medium: "bg-green-500/10 text-green-500 border-green-500/20",
};

export function RecentPosts() {
  // 按日期降序取前 3 篇
  const recent = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-20" id="blog">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="最新文章"
            description="分享技术思考和实践经验"
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {recent.map((post, index) => (
            <AnimatedSection key={post.url} delay={index * 0.1}>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <GlowCard className="flex h-full flex-col">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("zh-CN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </span>
                    <Badge variant="outline" className={platformColors[post.platform] || ""}>
                      {post.platform}
                    </Badge>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                </GlowCard>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog/">
                查看全部文章
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
