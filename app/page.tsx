import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container min-h-screen bg-white dark:bg-gray-800 flex justify-center items-center transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mb-8">
          Sharing my interest in a little bit of everything, but mostly – technology, robotics, and science
        </p>
        <Link
          href="/blog"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
        >
          View Blog Posts
        </Link>
      </div>
    </div>
  );
}