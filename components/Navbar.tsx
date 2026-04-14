"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NAV_WIDTHS = ["w-[80px]", "w-[108px]", "w-[72px]"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: "/#features",     label: t.nav.features    },
    { href: "/#how-it-works", label: t.nav.howItWorks  },
    { href: "/download",      label: t.nav.download    },
  ];

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
      <div className="max-w-5xl mx-auto px-8 sm:px-12 h-16 flex justify-between md:grid md:grid-cols-3 items-center">
        {/* Col 1 — Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/PiggySplit-icon.png" className="w-8 h-8" alt="" aria-hidden="true" />
          <span className="font-black text-xl" style={{ color: "var(--text-primary)" }}>
            Piggy<span style={{ color: "var(--piggy-primary)" }}>Split</span>
          </span>
        </Link>

        {/* Col 2 — Desktop nav, centered */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map(({ href, label }, i) => (
            <NavLink key={href} href={href} width={NAV_WIDTHS[i]}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Col 3 — Desktop CTA + mobile hamburger */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:flex items-center gap-3">
            <LocaleToggle locale={locale} setLocale={setLocale} />
            <Link
              href="/download"
              className="min-w-[120px] text-center px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 text-white"
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
          {navLinks.map(({ href, label }) => (
            <MobileNavLink key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </MobileNavLink>
          ))}
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

function NavLink({ href, width, children }: { href: string; width: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`${width} text-center text-sm font-semibold transition-colors duration-200 hover:opacity-70`}
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
          className="px-3 py-1.5 transition-all duration-200 cursor-pointer"
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
