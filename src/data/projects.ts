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
    oneLiner: "Production-ready AI image generation platform with modern full-stack architecture",
    description:
      "A scalable AI-powered image generation platform built with Next.js and TypeScript, integrating RESTful API workflows for text-to-image synthesis. The application delivers a responsive, modern dashboard experience with real-time rendering capabilities. Deployed on Render with a cloud-native architecture, featuring clean separation between frontend presentation, API service layer, and AI processing pipeline.",
    tags: ["AI", "Full-Stack", "Image Generation", "Next.js", "Cloud"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "REST API", "AI API", "Render"],
    highlights: [
      { icon: "Sparkles", label: "AI Generation", description: "Text-to-image synthesis via production AI API" },
      { icon: "Monitor", label: "Responsive UI", description: "Mobile-first dashboard with modern UX patterns" },
      { icon: "Layers", label: "Full-Stack", description: "Clean separation of concerns across the stack" },
      { icon: "Cloud", label: "Cloud Deploy", description: "Production deployment on Render" },
      { icon: "Link", label: "RESTful API", description: "Structured API integration for AI workflows" },
    ],
    features: [
      { title: "Text-to-Image Generation", description: "Submit text prompts and receive AI-generated images through a streamlined API workflow" },
      { title: "Responsive Dashboard", description: "Fully responsive management interface optimized for desktop and mobile devices" },
      { title: "Modern UI/UX", description: "Clean, accessible interface built with TailwindCSS and modern design principles" },
      { title: "API-Based AI Workflow", description: "Decoupled architecture with RESTful API layer separating frontend from AI services" },
      { title: "Real-Time Rendering", description: "Optimized image rendering pipeline with progress feedback for generation tasks" },
    ],
    architecture:
      "Next.js frontend communicates with an AI API service through a structured REST layer. Image processing is handled asynchronously, with results delivered to the client in real-time. The entire stack is deployed on Render with automatic builds and zero-downtime deploys.",
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
    oneLiner: "Scalable full-stack file management platform with concurrent processing and async task support",
    description:
      "A production-grade file management system built with Django and MySQL, featuring JWT authentication, Redis caching, and Celery-powered asynchronous task processing. The platform handles concurrent file operations with role-based access control. Containerized with Docker for consistent deployment, the architecture supports scalable backend processing with a dedicated cache layer and worker queue.",
    tags: ["Full-Stack", "Backend", "File Management", "Django", "Docker"],
    techStack: ["Django", "MySQL", "Redis", "Celery", "Docker", "JWT", "REST API"],
    highlights: [
      { icon: "Shield", label: "JWT Auth", description: "Secure token-based auth with role-based access" },
      { icon: "Database", label: "Redis Cache", description: "High-performance caching layer for queries" },
      { icon: "Zap", label: "Async Tasks", description: "Celery workers for background processing" },
      { icon: "Container", label: "Dockerized", description: "Container-based deployment for consistency" },
      { icon: "RefreshCw", label: "Concurrent", description: "Handles parallel file operations reliably" },
      { icon: "Link", label: "RESTful API", description: "Clean API design for frontend integration" },
    ],
    features: [
      { title: "Secure File Upload", description: "Authenticated file upload with validation, storage management, and fine-grained access control" },
      { title: "Async Task Processing", description: "Celery workers handle file processing, thumbnail generation, and batch operations in the background" },
      { title: "Concurrent Request Handling", description: "Architecture designed to handle multiple simultaneous file operations without degradation" },
      { title: "JWT Authentication", description: "Token-based authentication with role-based access control for secure multi-user environments" },
      { title: "Dashboard Management", description: "Intuitive dashboard for file browsing, uploading, and management operations" },
      { title: "Docker Deployment", description: "Fully containerized with Docker for consistent environments across development and production" },
    ],
    architecture:
      "Django REST API serves as the application layer, backed by MySQL for persistent storage. A Redis cache layer accelerates frequent queries, while Celery workers process heavy file operations asynchronously. The entire stack is Dockerized and deployed on Render.",
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
