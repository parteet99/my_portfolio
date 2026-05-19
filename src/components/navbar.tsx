import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Resume", href: "#resume" },
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="#introduction"
          className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          P. Singh
        </Link>

        <ul className="flex min-w-0 flex-1 items-center justify-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-2 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:px-3 sm:text-sm dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
