import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-heading text-sm font-bold tracking-tight">
              {"<" + siteConfig.name + " />"}
            </span>
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              {siteConfig.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              {
                href: siteConfig.author.github,
                icon: GithubIcon,
                label: "GitHub",
              },
              //{
              //  href: siteConfig.author,
              //  icon: LinkedinIcon,
              //  label: "LinkedIn",
              //},
              {
                href: `mailto:${siteConfig.author.email}`,
                icon: Mail,
                label: "Email",
              },
              { href: "/api/feed", icon: Rss, label: "RSS Feed" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={label !== "RSS Feed" ? "_blank" : undefined}
                rel={label !== "RSS Feed" ? "noopener noreferrer" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="hr-amber w-full" />
          <p className="text-center text-sm text-muted-foreground/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
