import type { Project } from "@/types";

/**
 * 项目数据
 * 新增项目只需在此数组中添加一条记录即可自动渲染到页面。
 * 字段说明：
 * - id: 唯一标识（用于 React key）
 * - title: 项目名称
 * - description: 项目描述
 * - tags: 技术标签（用于筛选和展示）
 * - cover: 封面图片路径（可选，放在 public/ 目录下）
 * - github: GitHub 仓库链接
 * - demo: 在线演示链接（可选）
 * - featured: 是否在首页展示
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "微服务电商平台",
    description:
      "基于 Spring Cloud 的分布式电商系统，支持高并发订单处理、分布式事务和实时库存管理。",
    tags: ["Java", "Spring Cloud", "Redis", "MySQL", "Docker", "RabbitMQ"],
    github: "https://github.com/yourusername/ecommerce-ms",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: "2",
    title: "API 网关服务",
    description:
      "高性能 API 网关，支持动态路由、限流熔断、JWT 鉴权和请求日志追踪。",
    tags: ["Java", "Spring Boot", "Netty", "Redis", "Prometheus"],
    github: "https://github.com/yourusername/api-gateway",
    featured: true,
  },
  {
    id: "3",
    title: "任务调度平台",
    description:
      "分布式任务调度系统，支持 Cron 表达式、任务依赖链、失败重试和执行日志。",
    tags: ["Java", "Spring Boot", "MySQL", "Quartz", "Vue.js"],
    github: "https://github.com/yourusername/task-scheduler",
    demo: "https://scheduler.example.com",
    featured: true,
  },
  {
    id: "4",
    title: "个人博客系统",
    description: "基于 Next.js 的现代化个人品牌网站，支持博客卡片展示、项目展示和暗黑模式。",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "React"],
    github: "https://github.com/fanxing222",
    demo: "https://blog.example.com",
    featured: false,
  },
  {
    id: "5",
    title: "代码生成器",
    description: "基于模板引擎的代码生成工具，根据数据库表结构自动生成 CRUD 代码。",
    tags: ["Java", "Freemarker", "MySQL", "Spring Boot"],
    github: "https://github.com/yourusername/code-generator",
    featured: false,
  },
  {
    id: "6",
    title: "智能客服助手",
    description: "基于大语言模型的智能客服系统，支持多轮对话、知识库检索和意图识别。",
    tags: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React"],
    github: "https://github.com/yourusername/ai-chatbot",
    demo: "https://chat.example.com",
    featured: false,
  },
];
