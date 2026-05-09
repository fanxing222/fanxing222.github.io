"use client";

import { useState, useMemo } from "react";
import { blogs } from "@/data/blogs";
import { PostCard } from "@/components/blog/post-card";
import { TagFilter } from "@/components/shared/tag-filter";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("all");

  // 提取所有不重复的标签
  const allTags = useMemo(
    () => [...new Set(blogs.flatMap((b) => b.tags))].sort(),
    []
  );

  // 按日期降序排列，筛选标签
  const filtered = useMemo(() => {
    const sorted = [...blogs].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (activeTag === "all") return sorted;
    return sorted.filter((b) => b.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="博客"
            description="技术文章和实践经验分享，点击卡片跳转阅读"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-10">
            <TagFilter tags={allTags} active={activeTag} onChange={setActiveTag} />
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <AnimatedSection key={post.url} delay={index * 0.03}>
              <PostCard {...post} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            暂无文章 / No posts yet
          </div>
        )}
      </div>
    </div>
  );
}
