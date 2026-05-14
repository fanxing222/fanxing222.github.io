import type {
  IPostFeedRepository,
  PostFeedItem,
  CreatePostFeedInput,
} from "@/repositories/interfaces";

const mockPosts: PostFeedItem[] = [
  {
    id: "1",
    content:
      "最近在学习 MySQL 的连接查询，搞清楚了 INNER JOIN、LEFT JOIN 和 RIGHT JOIN 的区别。之前一直分不清什么时候用哪种，画了个图之后终于理解了。",
    tags: ["MySQL", "数据库"],
    likes: 5,
    createdAt: new Date("2026-05-07T10:30:00Z"),
  },
  {
    id: "2",
    content:
      "第一次用 Spring Boot 搭了一个简单的 Web 项目，从创建项目到跑通接口花了大半天。配置文件搞了好久，不过最后成功返回 JSON 的时候还是挺有成就感的。",
    tags: ["Java", "Spring Boot"],
    likes: 8,
    createdAt: new Date("2026-05-05T14:20:00Z"),
  },
  {
    id: "3",
    content:
      "回顾了一下前段时间学的前端三件套，HTML 和 CSS 基础还行，JavaScript 的异步和 Promise 还需要多练。做了几个小页面，慢慢找到感觉了。",
    tags: ["前端", "JavaScript"],
    likes: 3,
    createdAt: new Date("2026-05-03T09:15:00Z"),
  },
  {
    id: "4",
    content:
      "用 Next.js 给自己做了一个个人网站，算是第一个完整的前端项目。过程中学到了很多组件化开发和静态部署的知识，踩了不少坑但也收获很大。",
    tags: ["Next.js", "前端", "项目"],
    likes: 12,
    createdAt: new Date("2026-04-28T16:45:00Z"),
  },
  {
    id: "5",
    content:
      "最近开始接触 Java Web 开发，了解了 Servlet 的基本概念和请求处理流程。虽然现在框架已经封装得很好了，但理解底层原理还是很有必要的。",
    tags: ["Java", "Java Web"],
    likes: 4,
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
