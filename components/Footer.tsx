export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-gray-800 py-4 text-center border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {currentYear} Darwin Kolisi. All rights reserved.
      </p>
    </footer>
  );
}