'use client';
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center transition-colors duration-300">
      <Link className="text-lg font-bold text-gray-800 dark:text-white hover:text-primary transition-colors duration-200" href="/">
        <h1 className="text-xl font-bold">Darwin</h1>
      </Link>
      <nav className="flex gap-4 items-center">
        <Link className="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors duration-200" href="/blog">
          Blog
        </Link>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => document.body.classList.toggle('dark')}
          className="h-8 w-8 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle dark mode"
        >
          <svg className="fill-primary block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
}