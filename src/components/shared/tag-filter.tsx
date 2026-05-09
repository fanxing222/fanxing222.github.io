"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
  allLabel?: string;
}

export function TagFilter({ tags, active, onChange, allLabel = "全部" }: TagFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Badge
        variant={active === "all" ? "default" : "outline"}
        className={cn(
          "cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground",
          active === "all" && "bg-primary text-primary-foreground"
        )}
        onClick={() => onChange("all")}
      >
        {allLabel}
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant={active === tag ? "default" : "outline"}
          className={cn(
            "cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground",
            active === tag && "bg-primary text-primary-foreground"
          )}
          onClick={() => onChange(tag)}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
