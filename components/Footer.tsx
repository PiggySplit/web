"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="mt-auto"
      style={{ background: "var(--text-primary)", color: "var(--text-inverse)" }}
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐷</span>
              <span className="font-black text-xl">
                Piggy<span style={{ color: "var(--piggy-primary)" }}>Split</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              {t.footer.tagline}
            </p>
            <div className="flex gap-3 mt-6">
              <AppBadge
                href="/download"
                icon="🍎"
                label="App Store"
                sublabel={t.nav.iosLabel}
              />
              <AppBadge
                href="/download"
                icon="🤖"
                label="Google Play"
                sublabel={t.nav.androidLabel}
              />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t.footer.product}
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/#features">{t.nav.features}</FooterLink>
              <FooterLink href="/#how-it-works">{t.nav.howItWorks}</FooterLink>
              <FooterLink href="/download">{t.nav.download}</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t.footer.legal}
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/privacy-policy">{t.footer.privacy}</FooterLink>
              <FooterLink href="/terms">{t.footer.terms}</FooterLink>
              <FooterLink href="/support">{t.footer.support}</FooterLink>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
        >
          <span>© {new Date().getFullYear()} PiggySplit. {t.footer.allRights}</span>
          <span>{t.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-medium transition-colors duration-200 hover:text-white"
        style={{ color: "rgba(255,255,255,0.6)" }}
      >
        {children}
      </Link>
    </li>
  );
}

function AppBadge({ href, icon, label, sublabel }: { href: string; icon: string; label: string; sublabel: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
    >
      <span>{icon}</span>
      <div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "9px", lineHeight: 1 }}>{sublabel}</div>
        <div style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>{label}</div>
      </div>
    </Link>
  );
}
