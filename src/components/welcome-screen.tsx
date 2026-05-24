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
      <div className="welcome-content relative z-10 flex max-w-4xl flex-col items-center text-center">
        <Anim
          className="welcome-badge mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted shadow-sm"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="text-base" aria-hidden>
            👋
          </span>
          Nice to meet you
        </Anim>

        <h1 className="font-display welcome-title text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl">
          <span className="welcome-line block overflow-hidden">
            <span className="welcome-line-inner inline-block">Parteetjot</span>
          </span>
          <span className="welcome-line block overflow-hidden">
            <span className="welcome-line-inner welcome-line-inner--delay inline-block text-accent">
              Singh
            </span>
          </span>
        </h1>

        <Anim
          className="welcome-role mt-8 max-w-md text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "0.55s" }}
        >
          Frontend developer who cares about clarity, craft, and interfaces
          that feel good to use.
        </Anim>

        <div
          className="welcome-divider welcome-animate mt-10 h-px max-w-xs bg-border"
          style={{ animationDelay: "0.7s" }}
          aria-hidden
        />
      </div>

      <Anim
        className="welcome-scroll absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ animationDelay: "0.85s" }}
      >
        <span className="welcome-scroll-mouse block h-9 w-5 rounded-full border-2 border-border">
          <span className="welcome-scroll-dot mx-auto mt-1.5 block h-1.5 w-1 rounded-full bg-accent" />
        </span>
        <p className="text-xs font-medium tracking-wide text-muted">
          Scroll when you&apos;re ready
        </p>
      </Anim>
    </div>
  );
}
