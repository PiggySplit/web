"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const stepMeta = [
  { number: "01", icon: "👥", color: "var(--piggy-primary-light)", accentColor: "var(--piggy-primary)" },
  { number: "02", icon: "🧾", color: "var(--piggy-accent-light)", accentColor: "var(--piggy-accent)" },
  { number: "03", icon: "✅", color: "#FFE4A8", accentColor: "var(--piggy-gold)" },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="py-20 sm:py-28" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-12">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
            style={{ background: "var(--bg-tertiary)", color: "var(--piggy-primary-dark)" }}
          >
            <span>⚡</span> {h.badge}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            {h.headline}{" "}
            <span className="gradient-text">{h.headlineGradient}</span>
          </h2>
          <p
            className="text-lg max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {h.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connector line - desktop only */}
          <div
            className="hidden md:block absolute top-12 left-[calc(16.67%+48px)] right-[calc(16.67%+48px)] h-px"
            style={{ background: "linear-gradient(90deg, var(--piggy-primary), var(--piggy-accent))", opacity: 0.3 }}
          />

          {h.steps.map((step, i) => (
            <StepCard key={i} step={step} meta={stepMeta[i]} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/download"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base text-white transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, var(--piggy-primary), var(--piggy-primary-dark))",
              boxShadow: "0 6px 24px rgba(232,145,127,0.4)",
            }}
          >
            <img src="/PiggySplit-icon.png" className="w-5 h-5" alt="" aria-hidden="true" />
            {h.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  meta,
  index,
}: {
  step: { title: string; description: string };
  meta: typeof stepMeta[0];
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
      className="relative flex flex-col gap-5 p-8 rounded-3xl transition-all duration-500"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
          style={{ background: meta.color }}
        >
          {meta.icon}
        </div>
        <span
          className="text-3xl font-black"
          style={{ color: meta.accentColor, opacity: 0.25 }}
        >
          {meta.number}
        </span>
      </div>

      <div>
        <h3
          className="text-xl font-black mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}
