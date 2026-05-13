"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
import { StatusBadge, TypeBadge } from "@/components/shared/status-badge";
import { ScreenshotCarousel } from "@/components/projects/screenshot-carousel";
import { ArchitectureDiagram, type ArchNode } from "@/components/projects/architecture-diagram";
import { GithubIcon } from "@/components/shared/icons";
import type { Project } from "@/types";
import * as LucideIcons from "lucide-react";

function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon ?? LucideIcons.Zap;
}

// Default architecture nodes for projects without custom architecture
function getDefaultArchNodes(project: Project): ArchNode[] {
  if (project.techStack.length === 0) return [];
  return project.techStack.slice(0, 5).map((tech) => ({
    label: tech,
    icon: "Box",
  }));
}

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const archNodes = getDefaultArchNodes(project);

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            返回项目列表
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <StatusBadge status={project.status} />
              <TypeBadge type={project.type} />
            </div>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {project.oneLiner}
            </p>
          </div>
        </AnimatedSection>

        {/* Screenshot Carousel */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <ScreenshotCarousel
              screenshots={project.screenshots}
              title={project.title}
            />
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection delay={0.15}>
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">Overview</h2>
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {project.highlights.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.highlights.map((h) => {
                  const Icon = getIcon(h.icon);
                  return (
                    <div
                      key={h.label}
                      className="flex items-start gap-3 rounded-lg border border-border/30 p-3"
                    >
                      <Icon className="h-5 w-5 text-primary/70 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium">{h.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {h.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Key Features */}
        {project.features.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <h2 className="font-heading text-xl font-semibold mb-6">Key Features</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((f, i) => (
                  <div
                    key={f.title}
                    className="rounded-lg border border-border/30 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-[10px] font-bold text-primary">
                        {i + 1}
                      </span>
                      <h3 className="text-sm font-medium">{f.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Architecture */}
        <AnimatedSection delay={0.25}>
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">Architecture</h2>
            <p className="leading-relaxed text-muted-foreground mb-6">
              {project.architecture}
            </p>

            {/* Architecture tags */}
            {project.architectureTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.architectureTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Architecture diagram */}
            {archNodes.length > 0 && (
              <div className="rounded-xl border border-border/30 bg-muted/30 p-6">
                <ArchitectureDiagram nodes={archNodes} />
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Tags */}
        <AnimatedSection delay={0.3}>
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Action buttons */}
        <AnimatedSection delay={0.35}>
          <div className="flex items-center gap-3 border-t border-border/30 pt-8">
            {project.demo ? (
              <Button asChild>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            ) : (
              <Button disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
            {project.github ? (
              <Button variant="outline" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            ) : (
              <Button variant="outline" disabled>
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
