"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ComponentProps,
  type CSSProperties,
} from "react";

const EXIT_MS = 700;

function Anim({
  children,
  className = "",
  style,
  ...props
}: ComponentProps<"div"> & { style?: CSSProperties }) {
  return (
    <div className={`welcome-animate ${className}`.trim()} style={style} {...props}>
      {children}
    </div>
  );
}

export function WelcomeScreen() {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");
  const [canInteract, setCanInteract] = useState(false);

  const dismiss = useCallback(() => {
    if (phase !== "enter") return;
    setPhase("exit");
    window.setTimeout(() => setPhase("done"), EXIT_MS);
  }, [phase]);

  useEffect(() => {
    const timer = window.setTimeout(() => setCanInteract(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dismiss]);

  if (phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
      className={`welcome-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-6 ${
        phase === "exit" ? "welcome-overlay--exit" : ""
      }`}
      onClick={() => canInteract && dismiss()}
    >
      <div className="welcome-bg" aria-hidden />
      <div className="welcome-grid" aria-hidden />

      <div className="welcome-content relative z-10 flex max-w-4xl flex-col items-center text-center">
        <Anim
          className="welcome-badge mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="welcome-pulse h-1.5 w-1.5 rounded-full bg-violet-500" />
          Portfolio
        </Anim>

        <h1 className="font-display welcome-title text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          <span className="welcome-line block overflow-hidden">
            <span className="welcome-line-inner inline-block">Parteetjot</span>
          </span>
          <span className="welcome-line block overflow-hidden">
            <span className="welcome-line-inner welcome-line-inner--delay inline-block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400">
              Singh
            </span>
          </span>
        </h1>

        <Anim
          className="welcome-role mt-10 text-lg font-medium tracking-wide text-zinc-600 sm:text-xl dark:text-zinc-400"
          style={{ animationDelay: "0.55s" }}
        >
          <span className="text-violet-500 dark:text-violet-400">{"< "}</span>
          Frontend Developer
          <span className="text-violet-500 dark:text-violet-400">{" />"}</span>
        </Anim>

        <div
          className="welcome-divider welcome-animate mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-violet-500 to-transparent"
          style={{ animationDelay: "0.7s" }}
          aria-hidden
        />

        <Anim
          className="welcome-cta mt-12 flex flex-col items-center gap-4"
          style={{ animationDelay: "0.85s" }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            disabled={!canInteract}
            className="welcome-btn relative rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 disabled:opacity-40 dark:bg-zinc-100 dark:text-zinc-900"
          >
            Explore portfolio
          </button>
          <p className="text-xs text-zinc-500">Click anywhere or press Enter</p>
        </Anim>
      </div>

      <Anim
        className="welcome-scroll absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1.1s" }}
        aria-hidden
      >
        <span className="welcome-scroll-mouse block h-9 w-5 rounded-full border-2 border-zinc-400/60 dark:border-zinc-500/60">
          <span className="welcome-scroll-dot mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-violet-500" />
        </span>
      </Anim>
    </div>
  );
}
