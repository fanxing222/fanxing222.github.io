import { projects } from "@/data/projects";
import { ProjectDetailClient } from "./project-detail-client";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
