import type { Project } from "@/types";

/**
 * 项目数据 / Project data
 *
 * 新增项目只需在此数组中添加一条记录即可自动渲染到页面。
 * 所有 URL、截图、亮点等字段均为占位符，请根据实际项目填写。
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
    id: "ecommerce-ms",
    title: "微服务电商平台",
    oneLiner: "基于 Spring Cloud 的分布式电商系统，支持高并发订单处理和分布式事务",
    description:
      "一个完整的分布式电商平台，采用微服务架构设计，支持高并发订单处理、分布式事务管理、实时库存同步等核心功能。系统经过压力测试，能够稳定处理大规模并发请求。",
    tags: ["Java", "Spring Cloud", "Redis", "MySQL", "Docker", "RabbitMQ"],
    techStack: ["Java 17", "Spring Cloud", "MySQL 8.0", "Redis", "RabbitMQ", "Docker"],
    highlights: [
      { icon: "Zap", label: "高并发", description: "支持高并发订单处理" },
      { icon: "Shield", label: "分布式事务", description: "基于 Seata 的分布式事务方案" },
      { icon: "Database", label: "数据一致性", description: "最终一致性保障" },
    ],
    features: [
      { title: "高并发订单处理", description: "基于消息队列的异步订单处理流程，削峰填谷" },
      { title: "实时库存管理", description: "Redis 缓存 + 数据库双写，保证库存数据一致性" },
      { title: "分布式事务", description: "基于 Seata 的分布式事务解决方案" },
      { title: "服务治理", description: "服务注册发现、配置中心、链路追踪" },
    ],
    architecture:
      "系统采用微服务架构，通过 Spring Cloud Gateway 统一入口，各微服务通过 RabbitMQ 进行异步通信。Redis 作为缓存层和分布式锁的实现，MySQL 作为持久化存储。使用 Seata 处理跨服务的分布式事务。",
    architectureTags: ["微服务", "消息队列", "缓存", "分布式事务", "服务治理"],
    screenshots: [],
    github: "",
    demo: "",
    status: "online",
    type: "fullstack",
    featured: true,
  },
  {
    id: "api-gateway",
    title: "API 网关服务",
    oneLiner: "高性能 API 网关，支持动态路由、限流熔断和 JWT 鉴权",
    description:
      "一个基于 Spring Boot 和 Netty 构建的高性能 API 网关，提供动态路由、限流熔断、JWT 鉴权、请求日志追踪等核心能力。支持插件化扩展，可以灵活添加自定义过滤器。",
    tags: ["Java", "Spring Boot", "Netty", "Redis", "Prometheus"],
    techStack: ["Java 17", "Spring Boot", "Netty", "Redis", "Prometheus"],
    highlights: [
      { icon: "Zap", label: "低延迟", description: "基于 Netty 的高性能网络通信" },
      { icon: "Shield", label: "安全鉴权", description: "JWT + RBAC 权限控制" },
      { icon: "Activity", label: "可观测", description: "Prometheus + Grafana 监控" },
    ],
    features: [
      { title: "动态路由", description: "支持运行时动态更新路由规则，无需重启服务" },
      { title: "限流熔断", description: "基于令牌桶的限流和熔断器模式" },
      { title: "JWT 鉴权", description: "统一的身份认证和权限校验" },
      { title: "请求追踪", description: "全链路请求日志记录和追踪" },
    ],
    architecture:
      "网关基于 Netty 构建网络层，Spring Boot 提供应用层框架。路由规则存储在 Redis 中，支持动态更新。通过 Prometheus 暴露指标数据，集成 Grafana 进行可视化监控。",
    architectureTags: ["网关", "限流", "鉴权", "监控", "高性能"],
    screenshots: [],
    github: "",
    demo: "",
    status: "online",
    type: "backend",
    featured: true,
  },
  {
    id: "task-scheduler",
    title: "任务调度平台",
    oneLiner: "分布式任务调度系统，支持 Cron 表达式、任务依赖链和失败重试",
    description:
      "一个分布式任务调度平台，支持 Cron 表达式调度、任务依赖链配置、失败自动重试、执行日志查看等功能。提供可视化管理界面，方便运维人员管理和监控任务执行状态。",
    tags: ["Java", "Spring Boot", "MySQL", "Quartz", "Vue.js"],
    techStack: ["Java 17", "Spring Boot", "Quartz", "MySQL", "Vue.js 3"],
    highlights: [
      { icon: "Clock", label: "定时调度", description: "支持 Cron 表达式和固定间隔调度" },
      { icon: "Link", label: "任务依赖", description: "支持 DAG 任务依赖链" },
      { icon: "RefreshCw", label: "失败重试", description: "可配置的自动重试策略" },
    ],
    features: [
      { title: "Cron 调度", description: "支持标准 Cron 表达式和固定间隔调度" },
      { title: "任务依赖链", description: "DAG 方式定义任务间的依赖关系" },
      { title: "失败重试", description: "支持指数退避和固定间隔的重试策略" },
      { title: "执行日志", description: "完整的任务执行日志和状态追踪" },
      { title: "可视化管理", description: "Web 界面管理任务和查看执行状态" },
    ],
    architecture:
      "系统采用主从架构，Master 负责任务调度和分发，Worker 节点负责实际执行。使用 Quartz 作为调度引擎，MySQL 存储任务定义和执行记录。前端使用 Vue.js 3 构建管理界面。",
    architectureTags: ["分布式调度", "任务依赖", "重试机制", "可视化"],
    screenshots: [],
    github: "",
    demo: "",
    status: "online",
    type: "fullstack",
    featured: true,
  },
  {
    id: "personal-blog",
    title: "个人博客系统",
    oneLiner: "基于 Next.js 的现代化个人品牌网站，支持项目展示和暗黑模式",
    description:
      "一个使用 Next.js 构建的现代化个人博客和作品集网站。采用静态导出部署到 GitHub Pages，支持暗黑模式、响应式设计、项目展示、博客文章聚合等功能。",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "React", "Framer Motion"],
    techStack: ["TypeScript", "Next.js 15", "React 19", "Tailwind CSS v4", "Framer Motion"],
    highlights: [
      { icon: "Monitor", label: "响应式", description: "完美适配各种设备尺寸" },
      { icon: "Moon", label: "暗黑模式", description: "支持明暗主题切换" },
      { icon: "Gauge", label: "高性能", description: "静态导出，Lighthouse 高分" },
    ],
    features: [
      { title: "项目展示", description: "支持项目详情页、截图轮播、技术架构展示" },
      { title: "博客聚合", description: "聚合多个平台的博客文章" },
      { title: "暗黑模式", description: "基于 next-themes 的主题切换" },
      { title: "动效设计", description: "基于 Framer Motion 的流畅动画" },
    ],
    architecture:
      "基于 Next.js App Router 构建，使用静态导出（output: export）部署到 GitHub Pages。Tailwind CSS v4 提供样式系统，Framer Motion 处理动画，shadcn/ui 提供组件基础。",
    architectureTags: ["静态导出", "SSG", "响应式", "主题系统"],
    screenshots: [],
    github: "",
    demo: "",
    status: "online",
    type: "frontend",
    featured: false,
  },
  {
    id: "code-generator",
    title: "代码生成器",
    oneLiner: "基于模板引擎的代码生成工具，根据数据库表结构自动生成 CRUD 代码",
    description:
      "一个代码生成工具，能够读取数据库表结构，根据预定义的模板自动生成 Entity、Mapper、Service、Controller 等 CRUD 代码。支持自定义模板，提高开发效率。",
    tags: ["Java", "Freemarker", "MySQL", "Spring Boot"],
    techStack: ["Java 17", "Freemarker", "MySQL", "Spring Boot"],
    highlights: [
      { icon: "Code", label: "代码生成", description: "一键生成 CRUD 代码" },
      { icon: "FileCode", label: "模板引擎", description: "Freemarker 模板，可自定义" },
      { icon: "Database", label: "表结构解析", description: "自动读取数据库元数据" },
    ],
    features: [
      { title: "表结构解析", description: "自动读取 MySQL 表结构和字段信息" },
      { title: "模板生成", description: "基于 Freemarker 模板生成各层代码" },
      { title: "自定义模板", description: "支持用户自定义代码模板" },
      { title: "批量生成", description: "支持一次性生成多张表的代码" },
    ],
    architecture:
      "工具通过 JDBC 连接数据库，读取 information_schema 获取表结构元数据。使用 Freemarker 模板引擎将元数据渲染为 Java 代码文件。支持命令行和 Web 界面两种使用方式。",
    architectureTags: ["代码生成", "模板引擎", "元数据解析"],
    screenshots: [],
    github: "",
    demo: "",
    status: "archived",
    type: "tool",
    featured: false,
  },
  {
    id: "ai-chatbot",
    title: "智能客服助手",
    oneLiner: "基于大语言模型的智能客服系统，支持多轮对话和知识库检索",
    description:
      "一个基于大语言模型的智能客服系统，支持多轮对话、知识库检索（RAG）、意图识别等功能。通过 RAG 技术结合企业知识库，提供准确的问答服务。",
    tags: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React"],
    techStack: ["Python 3.11", "FastAPI", "LangChain", "PostgreSQL", "React", "Docker"],
    highlights: [
      { icon: "Brain", label: "RAG 检索", description: "基于向量检索的知识库问答" },
      { icon: "MessageSquare", label: "多轮对话", description: "支持上下文感知的多轮对话" },
      { icon: "Search", label: "意图识别", description: "自动识别用户意图并路由" },
    ],
    features: [
      { title: "知识库问答", description: "基于 RAG 技术，结合企业知识库进行精准问答" },
      { title: "多轮对话", description: "维护对话上下文，支持连续追问" },
      { title: "意图识别", description: "自动识别用户意图，路由到对应处理流程" },
      { title: "管理后台", description: "知识库管理、对话记录查看、数据分析" },
    ],
    architecture:
      "系统采用前后端分离架构。后端使用 FastAPI 提供 REST API，LangChain 编排 LLM 调用链。知识库使用 PostgreSQL + pgvector 存储向量嵌入。前端使用 React 构建对话界面。",
    architectureTags: ["LLM", "RAG", "向量检索", "对话系统"],
    screenshots: [],
    github: "",
    demo: "",
    status: "in-progress",
    type: "fullstack",
    featured: false,
  },
];
