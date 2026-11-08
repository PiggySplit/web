"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TESTER_EMAIL, TESTER_MAILTO } from "@/lib/links";

// Toggletip for the Play badge: tap opens it on phones, hover or focus on desktop.
export default function PlayStoreTooltip({
  children,
  className = "",
  style,
  wrapperClassName = "",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  wrapperClassName?: string;
}) {
  const { t } = useLanguage();
  const d = t.downloadCta;
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const hovering = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  // Nudge the box so it stays 16px inside the viewport, wherever the badge sits.
  useLayoutEffect(() => {
    const el = box.current;
    if (!open || !el) return;
    el.style.translate = "";
    const r = el.getBoundingClientRect();
    const max = window.innerWidth - 16;
    const dx = r.right > max ? max - r.right : r.left < 16 ? 16 - r.left : 0;
    el.style.translate = `${dx}px 0`;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={`relative inline-flex ${wrapperClassName}`}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        hovering.current = true;
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        hovering.current = false;
        setOpen(false);
      }}
      onBlur={(e) => !ref.current?.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        // Hover already opened it, so a mouse click must not toggle it shut.
        onClick={() => setOpen((o) => hovering.current || !o)}
        // Dimmed while Android is in internal testing; the tooltip says why.
        className={`cursor-not-allowed opacity-60 ${className}`}
        style={style}
      >
        {children}
      </button>

      {/* pb-2 bridges the gap so the mouse can reach the email link */}
      <div
        id={id}
        role="status"
        hidden={!open}
        className="absolute bottom-full left-1/2 z-50 -translate-x-1/2 pb-2"
      >
        <div
          ref={box}
          className="w-64 max-w-[calc(100vw-2rem)] rounded-2xl px-4 py-3 text-left text-sm shadow-lg"
          style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
        >
          <p className="font-bold">{d.playTooltipTitle}</p>
          <p className="mt-1 leading-snug" style={{ color: "var(--text-secondary)" }}>
            {d.playTooltipBefore}{" "}
            <a
              href={TESTER_MAILTO}
              className="font-bold underline underline-offset-2 break-all"
              style={{ color: "var(--piggy-primary-dark)" }}
            >
              {TESTER_EMAIL}
            </a>{" "}
            {d.playTooltipAfter}
          </p>
        </div>
      </div>
    </div>
  );
}
