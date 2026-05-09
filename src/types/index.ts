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

// 项目类型
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  cover?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string; // Devicon class name
  level: number; // 0-100
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
