import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link className="home" href="/">
        <h1>Darwin</h1>
      </Link>
      <nav>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}