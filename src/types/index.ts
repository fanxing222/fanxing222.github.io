// 博客文章类型（外部链接）
export interface Blog {
  title: string;
  description: string;
  tags: string[];
  date: string;
  cover?: string;
  url: string;
  platform: "CSDN" | "Juejin" | "Medium";
}

// 项目状态 / Project status
export type ProjectStatus = "online" | "in-progress" | "archived";

// 项目类型 / Project type
export type ProjectType = "fullstack" | "frontend" | "backend" | "tool" | "library";

// 项目亮点 / Project highlight metric
export interface ProjectHighlight {
  icon: string; // lucide icon name, e.g. "Zap", "Shield", "Database"
  label: string; // e.g. "10k+ RPM"
  description: string; // e.g. "Handles 10,000 requests per minute"
}

// 项目功能 / Project feature
export interface ProjectFeature {
  title: string;
  description: string;
}

// 项目类型 / Project
export interface Project {
  id: string;
  title: string;
  oneLiner: string; // 单行简介 / Single-line summary for cards
  description: string; // 详细描述 / Longer description for detail page
  tags: string[];
  techStack: string[]; // 技术栈 / Explicit tech stack (ordered)
  highlights: ProjectHighlight[]; // 核心亮点 / Key metrics
  features: ProjectFeature[]; // 功能列表 / Feature list for detail page
  architecture: string; // 架构说明 / Architecture description
  architectureTags: string[]; // 架构标签 / e.g. ["API", "caching", "async"]
  screenshots: string[]; // 截图路径 / Paths in public/projects/{id}/
  cover?: string;
  github?: string;
  demo?: string;
  status: ProjectStatus;
  type: ProjectType;
  featured: boolean;
}

// 技能分类 / Skill category
export interface SkillCategory {
  name: string;
  icon: string; // lucide icon name
  description: string;
  skills: SkillItem[];
}

// 技能项 / Skill item
export interface SkillItem {
  name: string;
  icon: string; // devicon class
  level?: number; // 0-100 (optional, kept for backward compat)
}

// 旧版技能类型（向后兼容） / Legacy skill type
export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "language" | "framework" | "tool";
}

export interface PostFeedItem {
  id: string;
  content: string;
  tags?: string[];
  likes: number;
  createdAt: string;
}

export interface NavItem {
  label: string;
  href: string;
}
