import { NextResponse } from "next/server";
import { getPostFeedRepository } from "@/repositories";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const repo = getPostFeedRepository();
    const post = await repo.likePost(id);
    return NextResponse.json(post);
  } catch {
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }
}
