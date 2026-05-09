import { NextResponse } from "next/server";
import { getPostFeedRepository } from "@/repositories";

export async function GET() {
  const repo = getPostFeedRepository();
  const posts = await repo.getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const repo = getPostFeedRepository();
    const post = await repo.createPost({
      content: body.content,
      tags: body.tags,
    });
    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 400 }
    );
  }
}
