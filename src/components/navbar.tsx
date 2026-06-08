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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-surface/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavHashLink
          href="#introduction"
          className="shrink-0 transition-all duration-300 hover:scale-105 hover:ring-accent/40"
        >
        <span className="text-2xl font-bold font-display">Parteetjot Singh</span>
        </NavHashLink>

        {/* Desktop Nav */}
        <ul className="hidden items-center justify-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavHashLink
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:bg-surface-muted hover:text-foreground"
              >
                {item.label}
              </NavHashLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        {/* <div className="flex items-center gap-2">
          <ThemeToggle />
        </div> */}
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="border-t border-border/60 bg-surface/95 px-2 py-2 backdrop-blur-xl md:hidden">
        <ul className="flex items-center justify-between gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="flex-1">
              <NavHashLink
                href={item.href}
                className="flex items-center justify-center rounded-xl px-2 py-2 text-[11px] font-medium text-muted transition-all duration-300 hover:bg-surface-muted hover:text-foreground"
              >
                {item.label}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}