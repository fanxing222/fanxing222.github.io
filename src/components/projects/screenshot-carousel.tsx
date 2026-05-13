"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScreenshotCarouselProps {
  screenshots: string[];
  title: string;
}

export function ScreenshotCarousel({ screenshots, title }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0);
  const hasScreenshots = screenshots.length > 0;

  function prev() {
    setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  }

  function next() {
    setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-muted">
      <div className="relative aspect-video w-full">
        {hasScreenshots ? (
          <Image
            src={screenshots[current]}
            alt={`${title} - Screenshot ${current + 1}`}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="screenshot-placeholder flex h-full w-full items-center justify-center">
            <div className="text-center">
              <span className="text-5xl font-bold text-muted-foreground/20 font-heading">
                {title.charAt(0)}
              </span>
              <p className="mt-2 text-sm text-muted-foreground/40">
                项目截图待添加
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      {hasScreenshots && screenshots.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dot indicators */}
      {hasScreenshots && screenshots.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-all",
                i === current
                  ? "w-4 bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
