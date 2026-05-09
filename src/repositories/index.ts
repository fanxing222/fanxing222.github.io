import type { IPostFeedRepository } from "./interfaces";
import { MockPostFeedRepository } from "./mock/mock-post-feed-repo";

let postFeedRepo: IPostFeedRepository | null = null;

export function getPostFeedRepository(): IPostFeedRepository {
  if (!postFeedRepo) {
    // MVP: always use mock. Switch to Prisma when DATABASE_URL is set.
    postFeedRepo = new MockPostFeedRepository();
  }
  return postFeedRepo;
}
