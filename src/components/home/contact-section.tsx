"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

const contactSchema = z.object({
  name: z.string().min(2, "姓名至少 2 个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  message: z.string().min(10, "消息至少 10 个字符"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactForm) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("提交失败");

      setSubmitted(true);
      reset();
      toast.success("消息已发送，我会尽快回复！");
    } catch {
      toast.error("发送失败，请稍后重试");
    }
  }

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto max-w-xl px-4">
        <AnimatedSection>
          <SectionHeading
            title="联系我"
            description="有合作想法或工作机会？欢迎联系我"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle className="h-12 w-12 text-emerald-500" />
              <p className="font-heading text-lg font-semibold">感谢你的消息！</p>
              <p className="text-muted-foreground">我会尽快回复你。</p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                发送新消息
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <Input
                  placeholder="你的姓名"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="你的邮箱"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Textarea
                  placeholder="你的消息..."
                  rows={5}
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "发送中..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    发送消息
                  </>
                )}
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
