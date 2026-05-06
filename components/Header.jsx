import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">📚 Бібліотека</Link>
        <nav>
          <ul className="nav-list">
            <li><Link href="/">Головна</Link></li>
            <li><Link href="/catalog">Каталог</Link></li>
            <li><Link href="/about">Про бібліотеку</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
