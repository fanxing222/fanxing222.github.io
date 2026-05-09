"use client";

import { useState, useMemo } from "react";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("all");

  // 提取所有不重复的标签
  const allTags = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tags))].sort(),
    []
  );

  const filtered = useMemo(
    () =>
      activeTag === "all"
        ? projects
        : projects.filter((p) => p.tags.includes(activeTag)),
    [activeTag]
  );

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="项目展示"
            description="我参与开发的一些代表性项目"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-10">
            <ProjectFilter tags={allTags} active={activeTag} onChange={setActiveTag} />
          </div>
        </AnimatedSection>

        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
