import { NavHashLink } from "@/components/nav-hash-link";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const navItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Resume", href: "#resume" },
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-surface/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-10"
        aria-label="Main navigation"
      >
        <NavHashLink
          href="#introduction"
          className="shrink-0 rounded-full ring-2 ring-border transition hover:ring-accent/40"
        >
          <Image
            src="/P.png"
            alt="Parteetjot Singh"
            width={40}
            height={40}
            className="rounded-full"
          />
        </NavHashLink>

        <ul className="flex min-w-0 flex-1 items-center justify-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavHashLink
                href={item.href}
                className="rounded-full px-2.5 py-2 text-xs font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground sm:px-3.5 sm:text-sm"
              >
                {item.label}
              </NavHashLink>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
