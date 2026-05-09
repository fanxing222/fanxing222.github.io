"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/shared/glow-card";
import { GithubIcon } from "@/components/shared/icons";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlowCard className="flex h-full flex-col">
      <h3 className="font-heading text-lg font-semibold">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && (
          <Badge variant="outline" className="text-xs">
            +{project.tags.length - 4}
          </Badge>
        )}
      </div>

      {/* Links */}
      <div className="mt-5 flex items-center gap-2 border-t border-border/40 pt-4">
        {project.github && (
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="mr-1 h-4 w-4" />
              Source
            </Link>
          </Button>
        )}
        {project.demo && (
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
      </div>
    </GlowCard>
  );
}
