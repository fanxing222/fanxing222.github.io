export const siteConfig = {
  name: "章高瑞",
  title: "章高瑞 | 用代码与 AI 构建未来体验的开发者",
  description:
    "别人训练 AI，我训练自己如何更懂你。\n" +
    "Building with code, dreaming with AI.\n",
  url: "https://fanxing222.github.io",
  ogImage: "https://fanxing222.github.io/images/og/default.png",
  author: {
    name: "章高瑞",
    email: "18850696679@163.com",
    github: "https://github.com/fanxing222",
    //linkedin: "https://linkedin.com/in/zhanggaorui",
    //twitter: "https://twitter.com/zhanggaorui",
  },
  navItems: [
    { label: "首页", href: "/" },
    { label: "项目", href: "/projects/" },
    { label: "博客", href: "/blog/" },
    { label: "动态", href: "/posts/" },
    { label: "关于", href: "/about/" },
  ],
  status: "Open to Work",
} as const;

export type SiteConfig = typeof siteConfig;
