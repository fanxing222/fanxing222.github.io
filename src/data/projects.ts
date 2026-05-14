import type { Project } from "@/types";

/**
 * 项目数据 / Project data
 *
 * 新增项目只需在此数组中添加一条记录即可自动渲染到页面。
 * 截图放在 public/projects/{id}/ 目录下，然后更新 screenshots 数组。
 *
 * 字段说明：
 * - id: 唯一标识（用于 React key 和路由）
 * - title: 项目名称
 * - oneLiner: 单行简介（用于卡片展示）
 * - description: 详细描述（用于详情页）
 * - tags: 技术标签（用于筛选和展示）
 * - techStack: 技术栈（有序，用于详情页展示）
 * - highlights: 核心亮点/指标
 * - features: 功能列表（用于详情页）
 * - architecture: 架构说明文字
 * - architectureTags: 架构相关标签
 * - screenshots: 截图路径（放在 public/projects/{id}/ 目录下）
 * - cover: 封面图片路径（可选）
 * - github: GitHub 仓库链接
 * - demo: 在线演示链接
 * - status: 项目状态 ("online" | "in-progress" | "archived")
 * - type: 项目类型 ("fullstack" | "frontend" | "backend" | "tool" | "library")
 * - featured: 是否在首页展示
 */
export const projects: Project[] = [
  {
    id: "ai-image-web",
    title: "AI Image Web",
    oneLiner: "基于 Next.js 的 AI 图片生成练习项目",
    description:
      "一个 AI 图片生成的练习项目，使用 Next.js 和 TypeScript 构建。通过调用 AI API 实现文字生成图片功能，过程中学习了前后端交互、API 调用和响应式页面设计。部署在 Render 上，是第一个完整上线的全栈项目。",
    tags: ["AI", "Full-Stack", "Image Generation", "Next.js", "Cloud"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "REST API", "AI API", "Render"],
    highlights: [
      { icon: "Sparkles", label: "AI 调用", description: "学习调用 AI API 实现文字生成图片" },
      { icon: "Monitor", label: "响应式", description: "练习了移动端适配和响应式布局" },
      { icon: "Layers", label: "全栈实践", description: "前后端分离的项目结构实践" },
      { icon: "Cloud", label: "云端部署", description: "首次完成 Render 部署" },
      { icon: "Link", label: "API 对接", description: "学习了 RESTful API 的调用方式" },
    ],
    features: [
      { title: "文字生成图片", description: "输入文字描述，通过 AI API 生成对应图片" },
      { title: "响应式界面", description: "适配桌面和移动端的基本响应式布局" },
      { title: "API 调用学习", description: "通过实践理解前后端数据交互流程" },
      { title: "在线部署", description: "项目部署在 Render 上，可以在线访问体验" },
    ],
    architecture:
      "Next.js 前端通过 REST API 调用 AI 服务，获取生成的图片并展示。整个项目部署在 Render 上，通过自动构建实现持续部署。",
    architectureTags: ["Next.js", "TypeScript", "REST API", "AI API", "Render"],
    screenshots: [
      "/projects/ai-image-web/cover.png",
      "/projects/ai-image-web/generatet.png",
      "/projects/ai-image-web/result.png",
    ],
    github: "https://github.com/fanxing222/ai-image-web",
    demo: "https://ai-image-web-czsc.onrender.com",
    status: "online",
    type: "fullstack",
    featured: true,
  },
  {
    id: "filesystem",
    title: "FileSystem",
    oneLiner: "基于 Django 的文件管理练习项目",
    description:
      "一个文件管理系统的练习项目，使用 Django 和 MySQL 构建。实现了用户登录注册、文件上传下载等基本功能，过程中学习了 Django 框架的使用、数据库设计和 Docker 容器化部署。用 Redis 做了简单的缓存优化，用 Celery 处理异步任务。",
    tags: ["Full-Stack", "Backend", "File Management", "Django", "Docker"],
    techStack: ["Django", "MySQL", "Redis", "Celery", "Docker", "JWT", "REST API"],
    highlights: [
      { icon: "Shield", label: "用户认证", description: "学习了 JWT 认证和权限控制" },
      { icon: "Database", label: "缓存实践", description: "用 Redis 做了查询缓存的练习" },
      { icon: "Zap", label: "异步任务", description: "用 Celery 处理后台文件操作" },
      { icon: "Container", label: "Docker 部署", description: "学习了 Docker 容器化部署" },
      { icon: "Link", label: "API 设计", description: "练习了 RESTful API 的设计" },
    ],
    features: [
      { title: "文件上传管理", description: "支持文件上传、浏览和下载等基本操作" },
      { title: "异步处理", description: "用 Celery 处理耗时的文件操作任务" },
      { title: "用户认证", description: "JWT token 实现用户登录和权限控制" },
      { title: "管理后台", description: "Django 自带的后台管理功能" },
      { title: "Docker 部署", description: "使用 Docker Compose 管理多个服务" },
    ],
    architecture:
      "Django 作为后端框架，MySQL 存储数据，Redis 做缓存层，Celery 处理异步任务。使用 Docker Compose 编排所有服务。",
    architectureTags: ["Django", "MySQL", "Redis", "Celery", "Docker", "JWT"],
    screenshots: [
      "/projects/filesystem/cover.png",
      "/projects/filesystem/dashboard.png",
      "/projects/filesystem/upload.png",
      "/projects/filesystem/admin.png",
    ],
    github: "https://github.com/fanxing222/FileSystem",
    demo: "https://filesystem-1-53hm.onrender.com/dashboard",
    status: "online",
    type: "fullstack",
    featured: true,
  },
];

// ============================================================
// TODO: Screenshot Management
// ============================================================
// Place project screenshots in public/projects/{project-id}/
//
// Example structure:
//   public/projects/ai-image-web/cover.png
//   public/projects/ai-image-web/screenshot-1.png
//   public/projects/filesystem/cover.png
//   public/projects/filesystem/screenshot-1.png
//
// Then update the screenshots arrays above:
//   screenshots: [
//     "/projects/ai-image-web/cover.png",
//     "/projects/ai-image-web/screenshot-1.png",
//   ]
//
// The first screenshot (screenshots[0]) is used as the card thumbnail.
// ============================================================
