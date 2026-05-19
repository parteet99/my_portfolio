"use client";

import type { ComponentProps } from "react";

type NavHashLinkProps = ComponentProps<"a"> & {
  href: `#${string}`;
};

export function NavHashLink({
  href,
  onClick,
  children,
  ...props
}: NavHashLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
