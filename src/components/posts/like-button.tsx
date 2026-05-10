"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  initialLikes: number;
}

export function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  // 纯本地点赞切换——GitHub Pages 静态站点无后端
  function handleLike() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  return (
    <button
      onClick={handleLike}
      className={cn(
        "flex items-center gap-1.5 text-sm transition-colors",
        liked
          ? "text-red-500"
          : "text-muted-foreground hover:text-red-500"
      )}
      aria-label={liked ? "取消点赞" : "点赞"}
    >
      <Heart className={cn("h-4 w-4", liked && "fill-current")} />
      <span>{likes}</span>
    </button>
  );
}
