import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  variant?: "default" | "muted";
  className?: string;
};

export function SectionShell({
  id,
  children,
  variant = "default",
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-16 border-t border-border px-6 py-20 sm:px-10 sm:py-24",
        variant === "muted" ? "bg-surface-muted" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={[
        "max-w-2xl",
        centered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <p
        className={[
          "inline-flex items-center gap-2 text-sm font-medium text-accent",
          centered ? "justify-center" : "",
        ].join(" ")}
      >
        <span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          aria-hidden
        />
        {label}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function SurfaceCard({
  children,
  className = "",
  as: Tag = "article",
}: SurfaceCardProps) {
  return (
    <Tag
      className={[
        "rounded-3xl border border-border bg-surface p-6 shadow-card transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-card-hover sm:p-7",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

export function SkillPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-muted px-3.5 py-1.5 text-sm font-medium text-foreground">
      {children}
    </span>
  );
}
