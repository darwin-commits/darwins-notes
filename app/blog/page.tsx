import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";

export default function BlogPage() {
  const posts = getAllPosts().sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-10"> 
        <div className="max-w-2xl mx-auto"> 
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Blog</h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <div
                key={`${post.year}-${post.month}-${post.day}-${post.slug}`}
                className="border-b border-gray-200 dark:border-gray-700 pb-4 transition-colors duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white hover:text-primary transition-colors duration-200">
                  <Link href={`/${post.year}/${post.month}/${post.day}/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {formatDate(post.date)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
                <Link
                  href={`/${post.year}/${post.month}/${post.day}/${post.slug}`}
                  className="inline-block text-primary font-medium hover:underline transition-colors duration-200"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}