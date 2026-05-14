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
    oneLiner: "AI 图片生成 Web 应用（Java Swing → B/S 架构迁移）",
    description:
      "由原 Java Swing 桌面程序迁移到 B/S 架构的 AI 图片生成应用。用户可拍照或上传图片，输入 Prompt 后调用火山引擎 ARK API（豆包 Seedream 5.0）生成图片。前端使用原生 HTML/CSS/JavaScript，后端使用 Node.js + Express，通过 Axios 调用 AI 接口，Multer 处理文件上传。",
    tags: ["AI", "Full-Stack", "Image Generation", "Node.js", "Express"],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Axios", "Multer", "火山引擎 ARK API"],
    highlights: [
      { icon: "Sparkles", label: "AI 图片生成", description: "调用火山引擎豆包 Seedream 5.0 模型生成图片" },
      { icon: "Camera", label: "摄像头拍照", description: "支持调用摄像头拍照作为输入图片" },
      { icon: "Upload", label: "图片上传", description: "支持本地图片上传，Multer 处理文件" },
    ],
    features: [
      { title: "摄像头拍照", description: "调用设备摄像头拍摄照片作为输入" },
      { title: "本地图片上传", description: "支持从本地选择图片上传" },
      { title: "Prompt 输入", description: "输入文字描述指导 AI 生成图片" },
      { title: "AI 图片生成", description: "调用火山引擎 ARK API 生成图片" },
      { title: "图片保存", description: "生成的图片可保存到本地" },
    ],
    architecture:
      "前端 HTML/CSS/JavaScript 通过 Axios 调用后端 Express API，后端使用 Multer 处理文件上传，调用火山引擎 ARK API（豆包 Seedream 5.0）生成图片并返回结果。",
    architectureTags: ["Node.js", "Express", "Axios", "Multer", "火山引擎 ARK API"],
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
    oneLiner: "基于 Spring Boot + Next.js 的文件管理系统",
    description:
      "一个文件管理系统的练习项目，后端使用 Spring Boot 3 + Java 17，前端使用 Next.js 14 + React 18 + TypeScript。实现了服务器文件浏览、创建文件夹/文件、删除和上传等基本功能，通过 REST API 前后端交互。使用 Docker 容器化部署。项目中保留了一部分 Java Swing 遗留代码。",
    tags: ["Full-Stack", "File Management", "Spring Boot", "Next.js", "Docker"],
    techStack: ["Spring Boot 3", "Java 17", "Maven", "Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Radix UI", "Docker"],
    highlights: [
      { icon: "Server", label: "Spring Boot 后端", description: "使用 Spring Boot 3 + Java 17 构建 REST API" },
      { icon: "Monitor", label: "Next.js 前端", description: "Next.js 14 + React 18 + TypeScript 前端" },
      { icon: "Container", label: "Docker 部署", description: "使用 Docker 容器化部署" },
    ],
    features: [
      { title: "浏览服务器文件", description: "浏览服务器上的文件和文件夹结构" },
      { title: "创建文件夹", description: "在服务器上创建新文件夹" },
      { title: "创建文件", description: "在服务器上创建新文件" },
      { title: "删除文件/文件夹", description: "删除服务器上的文件或文件夹" },
      { title: "文件上传", description: "从本地上传文件到服务器" },
      { title: "REST API 文件管理", description: "通过 REST API 实现文件管理操作" },
    ],
    architecture:
      "Spring Boot 3 后端提供 REST API 进行文件管理操作，Next.js 14 前端使用 TypeScript 和 Radix UI 构建界面。使用 Docker 容器化部署。项目中保留了一部分 Java Swing 遗留代码。",
    architectureTags: ["Spring Boot 3", "Java 17", "Next.js 14", "TypeScript", "Tailwind CSS", "Docker"],
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
