"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    const circles = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: 180 + i * 80,
      speed: 0.0003 + i * 0.0001,
      offset: i * 1.2,
      color: i % 2 === 0 ? "rgba(232,145,127,0.12)" : "rgba(157,208,191,0.1)",
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      circles.forEach(c => {
        const x = canvas.width / 2 + Math.sin(frame * c.speed + c.offset) * canvas.width * 0.25;
        const y = canvas.height / 2 + Math.cos(frame * c.speed * 0.7 + c.offset) * canvas.height * 0.2;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, c.r);
        grad.addColorStop(0, c.color);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(x, y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "var(--bg-primary)" }} />

      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--piggy-primary-light)" }}
      />
      <div
        className="absolute bottom-20 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--piggy-accent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-8 sm:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: "var(--piggy-primary-light)",
                color: "var(--piggy-primary-dark)",
              }}
            >
              <span>🐷</span>
              <span>{h.badge}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {h.headline}{" "}
              <span className="gradient-text">{h.headlineGradient}</span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {h.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/download"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-base text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, var(--piggy-primary), var(--piggy-primary-dark))", boxShadow: "0 4px 20px rgba(232,145,127,0.4)" }}
              >
                <span>🍎</span> {h.iosButton}
              </Link>
              <Link
                href="/download"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                  border: "2px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span>🤖</span> {h.androidButton}
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["🙋‍♀️", "🙋‍♂️", "🙋", "🙋‍♀️"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-base"
                    style={{
                      background: ["#F8B4A8", "#C8E6DC", "#FFE4A8", "#F8B4A8"][i],
                      border: "2px solid var(--bg-primary)",
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
                {h.socialProof}
              </p>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup card1Text={h.card1Text} card1Sub={h.card1Sub} card2Text={h.card2Text} card2Sub={h.card2Sub} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({ card1Text, card1Sub, card2Text, card2Sub }: { card1Text: string; card1Sub: string; card2Text: string; card2Sub: string }) {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-30 scale-90"
        style={{ background: "radial-gradient(ellipse, var(--piggy-primary) 0%, var(--piggy-accent) 60%, transparent 100%)" }}
      />

      {/* Main phone */}
      <div
        className="relative w-[260px] sm:w-[280px] h-[540px] sm:h-[580px] rounded-[44px] overflow-hidden"
        style={{
          background: "#1a1a2e",
          boxShadow: "0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1 relative z-10" style={{ background: "#1a1a2e" }}>
          <div className="w-24 h-6 rounded-full" style={{ background: "#0d0d1a" }} />
        </div>

        {/* Screenshot placeholder */}
        <div
          className="w-full flex-1 flex items-start justify-center overflow-hidden"
          style={{ background: "var(--bg-primary)", height: "calc(100% - 40px)" }}
          id="hero-screenshot"
        >
          <AppScreenMockup />
        </div>
      </div>

      {/* Floating cards */}
      <FloatingCard style={{ top: "8%", right: "-20%", animationDelay: "0s" }} emoji="✅" text={card1Text} sub={card1Sub} />
      <FloatingCard style={{ bottom: "18%", left: "-22%", animationDelay: "0.5s" }} emoji="🔔" text={card2Text} sub={card2Sub} />
    </div>
  );
}

function AppScreenMockup() {
  return (
    <div className="w-full h-full p-4 overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Status bar */}
      <div className="flex justify-between text-xs mb-4" style={{ color: "var(--text-tertiary)" }}>
        <span className="font-bold">9:41</span>
        <div className="flex gap-1 items-center">
          <span>●●●</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="mb-5">
        <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-tertiary)" }}>Good morning 👋</p>
        <h2 className="text-lg font-black" style={{ color: "var(--text-primary)" }}>My Wallets</h2>
      </div>

      {/* Balance card */}
      <div
        className="rounded-2xl p-4 mb-4"
        style={{ background: "linear-gradient(135deg, var(--piggy-primary), var(--piggy-primary-dark))", boxShadow: "0 8px 20px rgba(232,145,127,0.35)" }}
      >
        <p className="text-xs font-bold mb-1 text-white opacity-80">Total Balance</p>
        <p className="text-2xl font-black text-white">$1,284.50</p>
        <div className="flex gap-4 mt-3">
          <div>
            <p className="text-xs text-white opacity-70">Income</p>
            <p className="text-sm font-bold text-white">$3,200</p>
          </div>
          <div>
            <p className="text-xs text-white opacity-70">Expenses</p>
            <p className="text-sm font-bold text-white">$1,915.50</p>
          </div>
        </div>
      </div>

      {/* Wallet list */}
      <p className="text-xs font-bold mb-2" style={{ color: "var(--text-secondary)" }}>Recent Transactions</p>
      {[
        { name: "Dinner w/ Mike", amount: "-$42.00", cat: "🍜", color: "#FFE4A8" },
        { name: "Groceries split", amount: "-$18.50", cat: "🛒", color: "#C8E6DC" },
        { name: "Received from Amy", amount: "+$25.00", cat: "💸", color: "#F8B4A8", positive: true },
      ].map((tx, i) => (
        <div key={i} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: "var(--divider)" }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm" style={{ background: tx.color }}>{tx.cat}</div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate" style={{ color: "var(--text-primary)" }}>{tx.name}</p>
          </div>
          <p className="text-xs font-black" style={{ color: tx.positive ? "var(--success)" : "var(--text-primary)" }}>{tx.amount}</p>
        </div>
      ))}
    </div>
  );
}

function FloatingCard({
  style,
  emoji,
  text,
  sub,
}: {
  style: React.CSSProperties;
  emoji: string;
  text: string;
  sub: string;
}) {
  return (
    <div
      className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{
        ...style,
        background: "rgba(255,248,240,0.95)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-md)",
        animation: "float 3s ease-in-out infinite",
        minWidth: "160px",
        maxWidth: "185px",
      }}
    >
      <span className="text-xl">{emoji}</span>
      <div>
        <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>{text}</p>
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{sub}</p>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
