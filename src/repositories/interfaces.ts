export interface PostFeedItem {
  id: string;
  content: string;
  tags: string[];
  likes: number;
  createdAt: Date;
}

export interface CreatePostFeedInput {
  content: string;
  tags?: string[];
}

export interface IPostFeedRepository {
  getPosts(options?: { limit?: number; offset?: number }): Promise<PostFeedItem[]>;
  getPostById(id: string): Promise<PostFeedItem | null>;
  createPost(data: CreatePostFeedInput): Promise<PostFeedItem>;
  likePost(id: string): Promise<PostFeedItem>;
}
