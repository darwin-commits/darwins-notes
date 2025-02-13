import { getPostBySlug } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import Link from "next/link";

type Params = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(
    resolvedParams.year,
    resolvedParams.month,
    resolvedParams.day,
    resolvedParams.slug
  );

  if (!post) return notFound();

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(post.content);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-block mb-8 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
          ← back
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.data.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Darwin • {formatDate(post.data.date)}
          </p>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: processedContent.toString() }}
          />
        </div>
      </div>
    </div>
  );
}