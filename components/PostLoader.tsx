import { getAllPosts } from "@/lib/getPosts";

export async function getPosts() {
  const posts = getAllPosts().map(post => ({
    title: post.title,
    category: post.tag,
    description: post.description,
    readTime: post.readTime,
    href: `/${post.year}/${post.month}/${post.day}/${post.slug}`,
  }));
  
  return posts;
}