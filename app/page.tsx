'use client';
import { useState } from "react";
import Link from "next/link";

const categories = [
  "Programming",
  "Science",
  "Experiment",
  "Neuroscience",
  "Philosophy",
];

// example featured topics
const featuredTopics = [
  {
    title: "Understanding Cognitive Biases",
    category: "Philosophy",
    description: "A deep dive into how our brain tricks us",
    readTime: "5 min read",
    href: "/",
  },
  {
    title: "Python vs C++: When to Use Each",
    category: "Programming",
    description: "Comparing strengths of two powerful languages",
    readTime: "7 min read",
    href: "/",
  },
  {
    title: "My Journey of Personal Growth",
    category: "Experiment",
    description: "Why am I so lazy",
    readTime: "6 min read",
    href: "/",
  },
];

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const filteredTopics = selectedCategories.length > 0
    ? featuredTopics.filter(topic => selectedCategories.includes(topic.category))
    : featuredTopics;

  return (
    // Welcome Message Section
    <div className="home-container min-h-screen bg-white dark:bg-gray-800 flex justify-center items-center transition-colors duration-300">
      <div className="text-center w-full max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-12">
          Sharing my interest in a little bit of everything, but mostly – technology, robotics, and science
        </p>

        {/* Category Buttons Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`font-medium py-2 px-4 rounded-full transition-colors duration-200 ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Topics Cards Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Featured Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {filteredTopics.map((topic, index) => (
              <Link key={index} href={topic.href} className="block justify-self-center">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{topic.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{topic.category}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{topic.description}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{topic.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}