"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
} from "react";

const EXIT_MS = 700;
const SCROLL_THRESHOLD = 12;
const SWIPE_THRESHOLD = 40;

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
  const [canScroll, setCanScroll] = useState(false);
  const touchStartY = useRef(0);

  const dismiss = useCallback(() => {
    if (phase !== "enter") return;
    setPhase("exit");
    window.setTimeout(() => {
      setPhase("done");
      document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
    }, EXIT_MS);
  }, [phase]);

  useEffect(() => {
    const timer = window.setTimeout(() => setCanScroll(true), 1200);
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
    if (phase !== "enter" || !canScroll) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY < SCROLL_THRESHOLD) return;
      e.preventDefault();
      dismiss();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? 0;
      if (touchStartY.current - y < SWIPE_THRESHOLD) return;
      e.preventDefault();
      dismiss();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [phase, canScroll, dismiss]);

  if (phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
      className={`welcome-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-6 ${
        phase === "exit" ? "welcome-overlay--exit" : ""
      }`}
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
            <span className="welcome-line-inner inline-block">{"{Parteetjot}"}</span>
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
      </div>

      <Anim
        className="welcome-scroll absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ animationDelay: "0.85s" }}
      >
        <span className="welcome-scroll-mouse block h-9 w-5 rounded-full border-2 border-zinc-400/60 dark:border-zinc-500/60">
          <span className="welcome-scroll-dot mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-violet-500" />
        </span>
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Scroll to continue
        </p>
      </Anim>
    </div>
  );
}
