import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PostFeed } from "@/components/posts/post-feed";
import { getPostFeedRepository } from "@/repositories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "动态",
  description: "技术动态和开发日志",
};

export default async function PostsPage() {
  const repo = getPostFeedRepository();
  const posts = await repo.getPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="动态"
            description="技术动态和开发日志"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <PostFeed posts={posts} />
        </AnimatedSection>
      </div>
    </div>
  );
}
