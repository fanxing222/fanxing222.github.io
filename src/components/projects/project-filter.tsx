"use client";

import { TagFilter } from "@/components/shared/tag-filter";

interface ProjectFilterProps {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}

export function ProjectFilter({ tags, active, onChange }: ProjectFilterProps) {
  return <TagFilter tags={tags} active={active} onChange={onChange} />;
}
