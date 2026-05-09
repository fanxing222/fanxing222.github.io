import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsSection } from "@/components/home/skills-section";
import { RecentPosts } from "@/components/home/recent-posts";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <RecentPosts />
      <ContactSection />
    </>
  );
}
