'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "Про бібліотеку" },
  { href: "/contact", label: "Контакти" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">📚 Бібліотека</Link>
        <nav className="nav">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return <Link key={link.href} href={link.href} className={isActive ? "active" : ""}>{link.label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
