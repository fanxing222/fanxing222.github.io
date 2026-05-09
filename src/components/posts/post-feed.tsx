"use client";

import { PostItem } from "./post-item";
import type { PostFeedItem } from "@/repositories/interfaces";

interface PostFeedProps {
  posts: PostFeedItem[];
}

export function PostFeed({ posts }: PostFeedProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center text-muted-foreground">
        暂无动态 / No posts yet
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
