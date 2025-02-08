import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}