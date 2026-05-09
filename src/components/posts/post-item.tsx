"use client";

import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/shared/glow-card";
import { LikeButton } from "./like-button";
import type { PostFeedItem } from "@/repositories/interfaces";

interface PostItemProps {
  post: PostFeedItem;
}

export function PostItem({ post }: PostItemProps) {
  const relativeTime = getRelativeTime(new Date(post.createdAt));

  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
        <div className="w-px flex-1 bg-border/50" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <GlowCard>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.createdAt.toString()}>{relativeTime}</time>
          </div>

          <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">
            {post.content}
          </p>

          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-3">
            <LikeButton postId={post.id} initialLikes={post.likes} />
          </div>
        </GlowCard>
      </div>
    </div>
  );
}

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 30) {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  if (days > 0) return `${days} 天前`;
  if (hours > 0) return `${hours} 小时前`;
  if (minutes > 0) return `${minutes} 分钟前`;
  return "刚刚";
}
