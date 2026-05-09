"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLike() {
    if (loading) return;
    setLoading(true);

    // Optimistic update
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);

    try {
      const res = await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setLikes(data.likes);
    } catch {
      // Revert on error
      setLiked(liked);
      setLikes(initialLikes);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={loading}
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
