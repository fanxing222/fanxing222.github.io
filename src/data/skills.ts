import type { SkillCategory, Skill } from "@/types";

/**
 * 技能分类数据 / Skill categories data
 *
 * 分为 5 个大类：Frontend, Backend, Database, DevOps, Tools
 * 每个技能使用 devicon 图标类名
 */
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Monitor",
    description: "客户端框架和语言",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Vue.js", icon: "devicon-vuejs-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    description: "服务端框架和语言",
    skills: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Spring Boot", icon: "devicon-spring-plain" },
      { name: "Spring Cloud", icon: "devicon-spring-plain" },
      { name: "MyBatis", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Express", icon: "devicon-express-original" },
    ],
  },
  {
    name: "Database",
    icon: "Database",
    description: "数据存储和中间件",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Redis", icon: "devicon-redis-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "RabbitMQ", icon: "devicon-rabbitmq-plain" },
    ],
  },
  {
    name: "DevOps",
    icon: "Container",
    description: "部署、CI/CD 和基础设施",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Nginx", icon: "devicon-nginx-plain" },
    ],
  },
  {
    name: "Tools",
    icon: "Wrench",
    description: "开发工具和效率工具",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Maven", icon: "devicon-maven-plain" },
      { name: "SQL", icon: "devicon-mysql-plain" },
    ],
  },
];

/**
 * 向后兼容的扁平技能数组 / Legacy flat skills array
 * 保留给 about 页面等旧版消费者使用
 */
export const skills: Skill[] = [
  // 编程语言 / Programming Languages
  { name: "Java", icon: "devicon-java-plain", level: 90, category: "language" },
  { name: "JavaScript", icon: "devicon-javascript-plain", level: 75, category: "language" },
  { name: "TypeScript", icon: "devicon-typescript-plain", level: 70, category: "language" },
  { name: "Python", icon: "devicon-python-plain", level: 60, category: "language" },
  { name: "SQL", icon: "devicon-mysql-plain", level: 80, category: "language" },

  // 框架 / Frameworks
  { name: "Spring Boot", icon: "devicon-spring-plain", level: 88, category: "framework" },
  { name: "React", icon: "devicon-react-original", level: 70, category: "framework" },
  { name: "Next.js", icon: "devicon-nextjs-plain", level: 65, category: "framework" },
  { name: "Express", icon: "devicon-express-original", level: 60, category: "framework" },
  { name: "MyBatis", icon: "devicon-java-plain", level: 80, category: "framework" },

  // 工具 / Tools
  { name: "Git", icon: "devicon-git-plain", level: 85, category: "tool" },
  { name: "Docker", icon: "devicon-docker-plain", level: 78, category: "tool" },
  { name: "Maven", icon: "devicon-maven-plain", level: 80, category: "tool" },
  { name: "Linux", icon: "devicon-linux-plain", level: 75, category: "tool" },
  { name: "MySQL", icon: "devicon-mysql-plain", level: 82, category: "tool" },
  { name: "Redis", icon: "devicon-redis-plain", level: 70, category: "tool" },
  { name: "Nginx", icon: "devicon-nginx-plain", level: 65, category: "tool" },
];
