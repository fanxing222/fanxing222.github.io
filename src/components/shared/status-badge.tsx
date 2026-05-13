import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

const statusConfig: Record<ProjectStatus, { label: string; dotClass: string }> = {
  online: { label: "Online", dotClass: "bg-emerald-500" },
  "in-progress": { label: "In Progress", dotClass: "bg-amber-500" },
  archived: { label: "Archived", dotClass: "bg-muted-foreground/50" },
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge variant="secondary" className={cn("gap-1.5", className)}>
      <span className={cn("inline-block h-1.5 w-1.5 rounded-full", config.dotClass)} />
      {config.label}
    </Badge>
  );
}

const typeLabels: Record<string, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  tool: "Tool",
  library: "Library",
};

interface TypeBadgeProps {
  type: string;
  className?: string;
}

export function TypeBadge({ type, className }: TypeBadgeProps) {
  return (
    <Badge variant="outline" className={className}>
      {typeLabels[type] ?? type}
    </Badge>
  );
}
