import { getPostBySlug } from "@/lib/getPosts";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import Link from "next/link";

type Params = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

type TableOfContentsItem = {
  id: string;
  title: string;
  level: number;
}

const extractTableOfContents = (content: string): TableOfContentsItem[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2];
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    toc.push({
      id,
      title,
      level,
    });
  }
  
  return toc;
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

  const tableOfContents = extractTableOfContents(post.content);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkToc, {
      heading: "Table of Contents",
      tight: true,
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
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
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="fixed top-20 right-8 hidden xl:block w-64">
            <div className="p-6 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
                On this page
              </h5>
              <ul className="text-slate-700 text-sm leading-6 space-y-2">
                {tableOfContents.map((item, index) => {
                  const indentLevel = Math.min(item.level - 2, 3);
                  return (
                    <li key={index} className={`ml-${indentLevel * 4}`}>
                    <a href={`#${item.id}`}
                      className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                        {indentLevel > 0 && (
                          <svg
                            width="3"
                            height="24"
                            viewBox="0 -9 3 24"
                            className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                            <path
                              d="M0 0L3 3L0 6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      <span className="truncate">{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-2xl mx-auto relative">
        <Link
          href="/blog"
          className="inline-block mb-8 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
        >
          ← back
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.data.title}
        </h1>
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