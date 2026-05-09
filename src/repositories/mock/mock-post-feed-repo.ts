import type {
  IPostFeedRepository,
  PostFeedItem,
  CreatePostFeedInput,
} from "@/repositories/interfaces";

const mockPosts: PostFeedItem[] = [
  {
    id: "1",
    content:
      "今天把项目从 Spring Boot 2.x 升级到了 3.x，主要的变化是 Jakarta EE 的包名迁移。升级过程中遇到了一些 MyBatis 的兼容问题，记录一下解决方案。",
    tags: ["Java", "Spring Boot"],
    likes: 12,
    createdAt: new Date("2026-05-07T10:30:00Z"),
  },
  {
    id: "2",
    content:
      "刚读完《Designing Data-Intensive Applications》的事务章节，对分布式事务有了更深的理解。推荐每个后端开发者都读一下这本书 📖",
    tags: ["读书", "分布式系统"],
    likes: 28,
    createdAt: new Date("2026-05-05T14:20:00Z"),
  },
  {
    id: "3",
    content:
      "用 Docker Compose 搭建了一套完整的本地开发环境：MySQL 8 + Redis 7 + RabbitMQ + Nginx。一键启动，再也不用担心环境不一致的问题了。",
    tags: ["Docker", "DevOps"],
    likes: 35,
    createdAt: new Date("2026-05-03T09:15:00Z"),
  },
  {
    id: "4",
    content:
      "给团队分享了一次关于 JVM 调优的技术分享，重点讲了 G1 GC 的工作原理和调优参数。大家反馈收获很大，把 PPT 也整理成了一篇博客。",
    tags: ["Java", "JVM", "性能优化"],
    likes: 42,
    createdAt: new Date("2026-04-28T16:45:00Z"),
  },
  {
    id: "5",
    content:
      "最近在研究 Redis 的内存优化，发现使用 Hash 结构替代多个 String 可以节省大量内存。在我们的场景下，内存占用减少了 40%。",
    tags: ["Redis", "性能优化"],
    likes: 19,
    createdAt: new Date("2026-04-25T11:00:00Z"),
  },
];

export class MockPostFeedRepository implements IPostFeedRepository {
  private posts = [...mockPosts];

  async getPosts(
    options?: { limit?: number; offset?: number }
  ): Promise<PostFeedItem[]> {
    const sorted = [...this.posts].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    const offset = options?.offset ?? 0;
    const limit = options?.limit ?? 20;
    return sorted.slice(offset, offset + limit);
  }

  async getPostById(id: string): Promise<PostFeedItem | null> {
    return this.posts.find((p) => p.id === id) ?? null;
  }

  async createPost(data: CreatePostFeedInput): Promise<PostFeedItem> {
    const post: PostFeedItem = {
      id: String(this.posts.length + 1),
      content: data.content,
      tags: data.tags ?? [],
      likes: 0,
      createdAt: new Date(),
    };
    this.posts.unshift(post);
    return post;
  }

  async likePost(id: string): Promise<PostFeedItem> {
    const post = this.posts.find((p) => p.id === id);
    if (!post) throw new Error("Post not found");
    post.likes += 1;
    return post;
  }
}
