import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 sm:px-8">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        {profile.name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex gap-5 text-base sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
