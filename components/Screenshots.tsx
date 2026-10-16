"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { ScreenItem } from "@/lib/translations/types";

const screenMeta = [
  { files: ["home-dashboard.png", "spending-charts.png"], placeholder: "home-dashboard", tagColor: "var(--piggy-primary-dark)", tagBg: "var(--piggy-primary-light)" },
  { files: ["wallet-detail.png", "expense-detail.png"],  placeholder: "wallet-detail",  tagColor: "#4AA08C",                   tagBg: "var(--piggy-accent-light)"    },
  { files: ["friends.png", "friend-search.png"],        placeholder: "friends",         tagColor: "#B5862A",                   tagBg: "#FFE4A8"                       },
];

export default function Screenshots() {
  const { t } = useLanguage();
  const s = t.screenshots;

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 sm:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
            style={{ background: "var(--bg-secondary)", color: "var(--piggy-primary-dark)" }}
          >
            <span>📱</span> {s.badge}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            {s.headline}{" "}
            <span className="gradient-text-accent">{s.headlineGradient}</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {s.subtitle}
          </p>
        </div>

        {/* Screenshot rows */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {s.screens.map((screen, i) => (
            <ScreenRow key={i} screen={screen} meta={screenMeta[i]} index={i} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenRow({
  screen,
  meta,
  index,
  flip,
}: {
  screen: ScreenItem;
  meta: typeof screenMeta[0];
  index: number;
  flip: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16 transition-all duration-700`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: "100ms",
      }}
    >
      <div className="flex-shrink-0 flex justify-center">
        <PhoneOrbit meta={meta} index={index} views={screen.views} />
      </div>

      {/* Copy */}
      <div className="flex-1 text-center lg:text-left">
        <span
          className="inline-block px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4"
          style={{ background: meta.tagBg, color: meta.tagColor }}
        >
          {screen.tag}
        </span>
        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {screen.headline}
        </h3>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
          style={{ color: "var(--text-secondary)" }}
        >
          {screen.description}
        </p>

        <div className="mt-6 flex flex-col gap-2 items-center lg:items-start">
          {screen.bullets.map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                style={{ background: meta.tagBg, color: meta.tagColor }}
              >
                ✓
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Front phone's resting angle on the ring; the other sits opposite, peeking out behind
const REST_ANGLE = -22;
const SPIN_MS = 750;

// Two screens on one horizontal ring; a tap spins the ring half a turn to swap them
function PhoneOrbit({ meta, index, views }: { meta: typeof screenMeta[0]; index: number; views: [string, string] }) {
  const { t } = useLanguage();
  const [spin, setSpin] = useState(0);
  const radius = useIsNarrow() ? 64 : 110;
  const spinRef = useRef(0);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const front = Math.round(spin / 180) % 2;

  const swap = () => {
    const from = spinRef.current;
    const to = Math.round(from / 180) * 180 + 180;
    cancelAnimationFrame(frame.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spinRef.current = to;
      setSpin(to);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / SPIN_MS, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      spinRef.current = from + (to - from) * eased;
      setSpin(spinRef.current);
      if (p < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={swap}
        aria-label={t.screenshots.showView.replace("{name}", views[1 - front])}
        className="relative w-[220px] sm:w-[250px] h-[460px] sm:h-[520px] cursor-pointer rounded-[40px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-8"
        style={{ outlineColor: "var(--piggy-primary)" }}
      >
        <div className="absolute inset-0 blur-2xl opacity-25 scale-90" style={{ background: meta.tagBg }} />
        {meta.files.map((file, i) => {
          const angle = ((REST_ANGLE + i * 180 + spin) * Math.PI) / 180;
          const depth = (Math.cos(angle) + 1) / 2; // 1 = front of the ring, 0 = back
          return (
            <div
              key={file}
              className="absolute inset-0"
              style={{
                transform: `translateX(${Math.sin(angle) * radius}px) scale(${0.78 + 0.22 * depth})`,
                zIndex: Math.round(depth * 100),
                filter: `brightness(${0.75 + 0.25 * depth})`,
              }}
            >
              <PhoneFrame>
                <ScreenImage
                  file={file}
                  placeholder={meta.placeholder}
                  index={index}
                  tagBg={meta.tagBg}
                />
              </PhoneFrame>
            </div>
          );
        })}
      </button>
      <p className="text-xs font-bold" style={{ color: "var(--text-tertiary)" }} aria-hidden="true">
        {views.map((view, i) => (
          <span key={view} style={{ color: front === i ? "var(--text-primary)" : undefined }}>
            {view}
            {" · "}
          </span>
        ))}
        {t.screenshots.tapToSwitch}
      </p>
    </div>
  );
}

const NARROW = "(max-width: 639px)";
function useIsNarrow() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(NARROW);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(NARROW).matches,
    () => false,
  );
}

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[40px]"
      style={{
        background: "#1a1a2e",
        boxShadow: "0 0 0 2px #333, 0 24px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex justify-center pt-3 pb-1" style={{ background: "#1a1a2e" }}>
        <div className="w-20 h-5 rounded-full" style={{ background: "#0d0d1a" }} />
      </div>
      <div className="w-full" style={{ height: "calc(100% - 36px)", position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

function ScreenImage({
  file,
  placeholder,
  index,
  tagBg,
}: {
  file: string;
  placeholder: string;
  index: number;
  tagBg: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const placeholderContent = [
    // Home dashboard
    <div key={0} className="w-full h-full p-4 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="mb-4 mt-1">
        <p className="text-xs font-bold" style={{ color: "var(--text-tertiary)" }}>Good morning 👋</p>
        <h2 className="text-base font-black" style={{ color: "var(--text-primary)" }}>Home</h2>
      </div>
      <div className="rounded-2xl p-4 mb-4" style={{ background: "linear-gradient(135deg, var(--piggy-primary), var(--piggy-primary-dark))" }}>
        <p className="text-xs text-white opacity-80 mb-1">Total Balance</p>
        <p className="text-2xl font-black text-white mb-2">$1,284.50</p>
        <div className="flex gap-4">
          <div><p className="text-xs text-white opacity-70">Income</p><p className="text-sm font-bold text-white">$3,200</p></div>
          <div><p className="text-xs text-white opacity-70">Expenses</p><p className="text-sm font-bold text-white">$1,915</p></div>
        </div>
      </div>
      <div className="rounded-xl p-3 mb-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <p className="text-xs font-bold mb-2" style={{ color: "var(--text-secondary)" }}>By Category</p>
        <div className="flex items-end gap-2 h-16">
          {[70, 45, 85, 55, 65, 40].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-lg" style={{ height: `${h}%`, background: i % 2 === 0 ? "var(--piggy-primary-light)" : "var(--piggy-accent-light)" }} />
          ))}
        </div>
      </div>
      {[
        { e: "🍜", name: "Dinner w/ Mike", amt: "-$42", color: "#FFE4A8" },
        { e: "🛒", name: "Groceries split", amt: "-$18.50", color: "#C8E6DC" },
        { e: "💸", name: "Received from Amy", amt: "+$25", color: "#F8B4A8", positive: true },
      ].map((tx, i) => (
        <div key={i} className="flex items-center gap-2 py-2 border-b last:border-0" style={{ borderColor: "var(--divider)" }}>
          <div className="w-7 h-7 rounded-xl flex items-center justify-center text-xs" style={{ background: tx.color }}>{tx.e}</div>
          <div className="flex-1"><p className="text-xs font-bold truncate" style={{ color: "var(--text-primary)" }}>{tx.name}</p></div>
          <p className="text-xs font-black" style={{ color: tx.positive ? "var(--success)" : "var(--text-primary)" }}>{tx.amt}</p>
        </div>
      ))}
    </div>,

    // Wallet detail
    <div key={1} className="w-full h-full p-4 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="mb-3 mt-1">
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>← Back</p>
        <h2 className="text-base font-black" style={{ color: "var(--text-primary)" }}>🏖️ Bali Trip</h2>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>4 members · USD</p>
      </div>
      <div className="rounded-2xl p-3 mb-3" style={{ background: "var(--piggy-accent-light)" }}>
        <p className="text-xs font-bold mb-1" style={{ color: "var(--piggy-accent)" }}>Total Spent</p>
        <p className="text-xl font-black" style={{ color: "var(--text-primary)" }}>$2,480.00</p>
        <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>Your share: $620.00</p>
      </div>
      <div className="flex gap-2 mb-3">
        {["All", "Pending", "Settled"].map((label, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: i === 0 ? "var(--piggy-primary)" : "var(--bg-secondary)", color: i === 0 ? "white" : "var(--text-secondary)" }}>{label}</span>
        ))}
      </div>
      {[
        { e: "🍜", name: "Dinner", amt: "$124", stat: "Pending" },
        { e: "🏨", name: "Hotel night 2", amt: "$280", stat: "Settled" },
        { e: "🛵", name: "Scooter rental", amt: "$60", stat: "Pending" },
        { e: "🏄", name: "Surf lesson", amt: "$45", stat: "Settled" },
      ].map((tx, i) => (
        <div key={i} className="flex items-center gap-2 py-2 border-b last:border-0" style={{ borderColor: "var(--divider)" }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs" style={{ background: "var(--bg-secondary)" }}>{tx.e}</div>
          <div className="flex-1"><p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>{tx.name}</p><p className="text-xs" style={{ color: tx.stat === "Settled" ? "var(--success)" : "var(--piggy-primary)" }}>{tx.stat}</p></div>
          <p className="text-xs font-black" style={{ color: "var(--text-primary)" }}>{tx.amt}</p>
        </div>
      ))}
    </div>,

    // Friends
    <div key={2} className="w-full h-full p-4 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="mb-3 mt-1">
        <h2 className="text-base font-black" style={{ color: "var(--text-primary)" }}>Friends</h2>
      </div>
      <div className="flex items-center gap-2 rounded-xl px-3 py-2 mb-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>🔍</span>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>Search by username or email...</p>
      </div>
      <p className="text-xs font-bold mb-2" style={{ color: "var(--text-tertiary)" }}>MY FRIENDS · 5</p>
      {[
        { name: "Sarah Chen", user: "@sarahc", color: "#F8B4A8" },
        { name: "Mike Torres", user: "@miket", color: "#C8E6DC" },
        { name: "Amy Liu", user: "@amyliu", color: "#FFE4A8" },
        { name: "David Park", user: "@davidp", color: "#F8B4A8" },
      ].map((f, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: "var(--divider)" }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: f.color }}>{f.name[0]}</div>
          <div className="flex-1">
            <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>{f.name}</p>
            <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>{f.user}</p>
          </div>
          <div className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "var(--piggy-primary-light)", color: "var(--piggy-primary-dark)" }}>Split</div>
        </div>
      ))}
    </div>,
  ];

  return (
    <div className="absolute inset-0">
      {!failed && (
        <Image
          src={`/screenshots/${file}`}
          alt={placeholder}
          fill
          className={`object-cover object-top transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${loaded && !failed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {placeholderContent[index] || null}
      </div>
    </div>
  );
}
