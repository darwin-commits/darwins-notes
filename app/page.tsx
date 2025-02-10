'use client';
import Link from "next/link";

const categories = [
  "Programming",
  "Robotics",
  "Science",
  "Experiment",
  "Neuroscience",
  "Philosophy",
];

export default function Home() {
  return (
    <div className="home-container min-h-screen bg-white dark:bg-gray-800 flex justify-center items-center transition-colors duration-300">
      <div className="text-center w-full max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-12">
          Sharing my interest in a little bit of everything, but mostly – technology, robotics, and science
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                onClick={() => {
                  console.log(`Category button clicked: ${category}`);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}