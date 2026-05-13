"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatusBadge, TypeBadge } from "@/components/shared/status-badge";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/shared/icons";
import type { Project } from "@/types";
import * as LucideIcons from "lucide-react";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

function getIcon(name: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon ?? LucideIcons.Zap;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const hasScreenshot = project.screenshots.length > 0 && project.screenshots[0];

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card transition-all duration-300",
        "hover:border-border hover:shadow-lg hover:shadow-black/5",
        className
      )}
    >
      {/* Screenshot / Placeholder */}
      <Link href={`/projects/${project.id}`} className="relative block">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {hasScreenshot ? (
            <Image
              src={project.screenshots[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="screenshot-placeholder flex h-full w-full items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground/30 font-heading">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Status + Type badges */}
        <div className="mb-3 flex items-center gap-2">
          <StatusBadge status={project.status} />
          <TypeBadge type={project.type} />
        </div>

        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="font-heading text-lg font-semibold leading-tight hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* One-liner */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.oneLiner}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-mono">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/30 pt-4">
            {project.highlights.slice(0, 3).map((h) => {
              const Icon = getIcon(h.icon);
              return (
                <div key={h.label} className="flex flex-col items-center gap-1 text-center">
                  <Icon className="h-4 w-4 text-primary/70" />
                  <span className="text-xs font-medium">{h.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-4 flex items-center gap-2 border-t border-border/30 pt-4">
          {project.demo ? (
            <Button variant="default" size="sm" className="flex-1" asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Live Demo
              </Link>
            </Button>
          ) : (
            <Button variant="default" size="sm" className="flex-1" disabled>
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live Demo
            </Button>
          )}
          {project.github ? (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-1.5 h-3.5 w-3.5" />
                GitHub
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="flex-1" disabled>
              <GithubIcon className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
