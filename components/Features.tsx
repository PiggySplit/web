"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const featureMeta = [
  { icon: "💳", color: "#F8B4A8", bg: "#FFF0EC", screenshot: "wallet-detail" },
  { icon: "⚖️", color: "#C8E6DC", bg: "#F0FAF7", screenshot: "add-transaction" },
  { icon: "📸", color: "#FFE4A8", bg: "#FFFAED", screenshot: "transaction-detail" },
  { icon: "🤝", color: "#C8E6DC", bg: "#F0FAF7", screenshot: "friends" },
  { icon: "📊", color: "#F8B4A8", bg: "#FFF0EC", screenshot: "home-dashboard" },
  { icon: "🔁", color: "#FFE4A8", bg: "#FFFAED", screenshot: "recurring" },
];

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-8 sm:px-12">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
            style={{ background: "var(--bg-secondary)", color: "var(--piggy-primary-dark)" }}
          >
            <span>✨</span> {f.badge}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            {f.headline}{" "}
            <span className="gradient-text">{f.headlineGradient}</span>
            {f.headlineSuffix ? ` ${f.headlineSuffix}` : ""}
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {f.subtitle}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {f.items.map((item, i) => (
            <FeatureCard key={i} item={item} meta={featureMeta[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  item,
  meta,
  index,
}: {
  item: { title: string; headline: string; description: string };
  meta: typeof featureMeta[0];
  index: number;
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
      className="group rounded-3xl p-7 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1 cursor-default"
      style={{
        background: meta.bg,
        border: `1px solid ${meta.color}44`,
        boxShadow: "var(--shadow-sm)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200"
        style={{ background: meta.color }}
      >
        {meta.icon}
      </div>

      <span
        className="text-xs font-black uppercase tracking-widest"
        style={{ color: meta.color === "#C8E6DC" ? "var(--piggy-accent)" : "var(--piggy-primary)" }}
      >
        {item.title}
      </span>

      <h3
        className="text-xl font-black leading-snug"
        style={{ color: "var(--text-primary)" }}
      >
        {item.headline}
      </h3>

      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {item.description}
      </p>
    </div>
  );
}
