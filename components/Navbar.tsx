"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,248,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 h-16 grid grid-cols-[1fr_auto_1fr] md:grid-cols-3 items-center">
        {/* Col 1 — Logo, left-aligned */}
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <span className="text-2xl">🐷</span>
          <span className="font-black text-xl" style={{ color: "var(--text-primary)" }}>
            Piggy<span style={{ color: "var(--piggy-primary)" }}>Split</span>
          </span>
        </Link>

        {/* Col 2 — Desktop nav, centered */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <NavLink href="/#features">{t.nav.features}</NavLink>
          <NavLink href="/#how-it-works">{t.nav.howItWorks}</NavLink>
          <NavLink href="/download">{t.nav.download}</NavLink>
        </div>

        {/* Col 3 — Desktop CTA + mobile button, right-aligned */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:flex items-center gap-3">
            <LocaleToggle locale={locale} setLocale={setLocale} />
            <Link
              href="/download"
              className="px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 text-white"
              style={{ background: "var(--piggy-primary)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--piggy-primary-dark)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--piggy-primary)")}
            >
              {t.nav.getApp}
            </Link>
          </div>
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--text-primary)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(255,248,240,0.97)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <MobileNavLink href="/#features" onClick={() => setMenuOpen(false)}>{t.nav.features}</MobileNavLink>
          <MobileNavLink href="/#how-it-works" onClick={() => setMenuOpen(false)}>{t.nav.howItWorks}</MobileNavLink>
          <MobileNavLink href="/download" onClick={() => setMenuOpen(false)}>{t.nav.download}</MobileNavLink>
          <div className="flex items-center justify-between mt-1">
            <LocaleToggle locale={locale} setLocale={setLocale} />
            <Link
              href="/download"
              className="px-5 py-3 rounded-full font-bold text-sm text-center text-white"
              style={{ background: "var(--piggy-primary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.getApp}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-semibold transition-colors duration-200 hover:opacity-70"
      style={{ color: "var(--text-secondary)" }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="text-base font-semibold py-1"
      style={{ color: "var(--text-primary)" }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function LocaleToggle({ locale, setLocale }: { locale: string; setLocale: (l: "en" | "zh") => void }) {
  return (
    <div
      className="flex items-center rounded-full overflow-hidden text-xs font-bold"
      style={{ border: "1.5px solid var(--border)", background: "var(--bg-secondary)" }}
    >
      {(["en", "zh"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className="px-3 py-1.5 transition-all duration-200"
          style={{
            background: locale === l ? "var(--piggy-primary)" : "transparent",
            color: locale === l ? "#fff" : "var(--text-secondary)",
          }}
        >
          {l === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
