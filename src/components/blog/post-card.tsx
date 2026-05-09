import { Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/shared/glow-card";
import type { Blog } from "@/types";

// 平台颜色映射
const platformColors: Record<string, string> = {
  CSDN: "bg-red-500/10 text-red-500 border-red-500/20",
  Juejin: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Medium: "bg-green-500/10 text-green-500 border-green-500/20",
};

export function PostCard({ title, description, tags, date, url, platform }: Blog) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <GlowCard className="flex h-full flex-col">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </span>
          <Badge variant="outline" className={platformColors[platform] || ""}>
            {platform}
          </Badge>
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-sm">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      </GlowCard>
    </a>
  );
}
