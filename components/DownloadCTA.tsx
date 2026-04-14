"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AppleIcon, GooglePlayIcon } from "@/components/StoreIcons";

export default function DownloadCTA() {
  const { t } = useLanguage();
  const d = t.downloadCta;

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-20 sm:py-28"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className="rounded-3xl sm:rounded-[40px] p-10 sm:p-16 text-center relative overflow-hidden transition-all duration-700"
          style={{
            background: "linear-gradient(135deg, var(--text-primary) 0%, #5a3a3a 100%)",
            boxShadow: "var(--shadow-lg)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--piggy-primary)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--piggy-accent)" }}
          />

          {/* Content */}
          <div className="relative">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
            >
              <span>🐷</span> {d.badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              {d.headline}{" "}
              <span style={{ color: "var(--piggy-primary-light)" }}>{d.headlineGradient}</span>
            </h2>

            <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              {d.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/download"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "white", color: "var(--text-primary)" }}
              >
                <AppleIcon className="w-6 h-6 text-gray-900" />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-60 leading-none mb-0.5">{d.iosLabel1}</div>
                  <div className="font-black leading-none">{d.iosLabel2}</div>
                </div>
              </Link>
              <Link
                href="/download"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <GooglePlayIcon className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-xs font-normal opacity-60 leading-none mb-0.5">{d.androidLabel1}</div>
                  <div className="font-black leading-none">{d.androidLabel2}</div>
                </div>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {d.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
