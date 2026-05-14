import type { SkillCategory } from "@/types";

/**
 * 技能分类数据 / Skill categories data
 *
 * 每个技能使用 devicon 图标类名
 */
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Monitor",
    description: "前端开发",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    description: "后端开发",
    skills: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Spring Boot", icon: "devicon-spring-plain" },
    ],
  },
  {
    name: "Database",
    icon: "Database",
    description: "数据库",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
    ],
  },
  {
    name: "DevOps",
    icon: "Container",
    description: "开发运维",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
  },
  {
    name: "Tools",
    icon: "Wrench",
    description: "开发工具",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Maven", icon: "devicon-maven-plain" },
      { name: "SQL", icon: "devicon-mysql-plain" },
    ],
  },
];
