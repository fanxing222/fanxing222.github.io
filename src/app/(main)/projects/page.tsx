"use client";

import { useState, useMemo } from "react";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import type { ProjectStatus } from "@/types";

type StatusFilter = "all" | ProjectStatus;

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("all");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("all");

  const allTags = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tags))].sort(),
    []
  );

  const filtered = useMemo(() => {
    let result = projects;
    if (activeStatus !== "all") {
      result = result.filter((p) => p.status === activeStatus);
    }
    if (activeTag !== "all") {
      result = result.filter((p) => p.tags.includes(activeTag));
    }
    return result;
  }, [activeTag, activeStatus]);

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
          <div className="mb-8 flex flex-col items-center gap-4">
            {/* Status tabs */}
            <Tabs
              value={activeStatus}
              onValueChange={(v) => setActiveStatus(v as StatusFilter)}
            >
              <TabsList variant="line">
                <TabsTrigger value="all">全部</TabsTrigger>
                <TabsTrigger value="online">Online</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Tag filter */}
            <ProjectFilter tags={allTags} active={activeTag} onChange={setActiveTag} />
          </div>
        </AnimatedSection>

        <ProjectGrid projects={filtered} />
      </div>
    </div>
  );
}
