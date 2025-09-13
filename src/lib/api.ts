import { POSTS_API_ENDPOINT } from 'astro:env/server';

type Post = {
  id: string;
  url: string;
};

export async function fetchPosts(): Promise<{
  posts: Post[];
  hasError: boolean;
}> {
  try {
    const response = await fetch(POSTS_API_ENDPOINT);

    if (!response.ok) {
      return { posts: [], hasError: true };
    }

    const posts = (await response.json()) as Post[];

    return { posts, hasError: false };
  } catch (err) {
    return { posts: [], hasError: true };
  }
}
