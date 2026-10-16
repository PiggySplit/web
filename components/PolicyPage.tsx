"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import type { ContentBlock, PolicyDocument, PolicySection, Translations } from "@/lib/translations/types";

// Shared layout for the legal pages; each page picks its document from the translations.
export default function PolicyPage({ icon, pick }: { icon: string; pick: (t: Translations) => PolicyDocument }) {
  const { t } = useLanguage();
  const { badge, title, lastUpdated, sections } = pick(t);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-8 sm:px-12">
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{ background: "var(--bg-secondary)", color: "var(--piggy-primary-dark)" }}
            >
              {icon} {badge}
            </div>
            <h1 className="text-4xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              {title}
            </h1>
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              {lastUpdated}
            </p>
          </div>

          <div className="prose-custom">
            {sections.map((section) => (
              <PolicySectionBlock key={section.title} section={section} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        .prose-custom { color: var(--text-secondary); line-height: 1.8; }
        .prose-custom p { margin-bottom: 1rem; }
        .prose-custom ul { margin: 0.75rem 0 1rem 1.5rem; list-style: disc; }
        .prose-custom li { margin-bottom: 0.4rem; }
        .prose-custom h4 { font-weight: 800; color: var(--text-primary); margin: 1.5rem 0 0.5rem; font-size: 1rem; }
        .prose-custom a { color: var(--piggy-primary); font-weight: 600; text-decoration: underline; }
        .prose-custom strong { color: var(--text-primary); font-weight: 700; }
      `}</style>
    </>
  );
}

function PolicySectionBlock({ section }: { section: PolicySection }) {
  return (
    <div
      className="mb-10 p-8 rounded-2xl"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <h2
        className="text-xl font-black mb-5"
        style={{ color: "var(--text-primary)", borderBottom: "2px solid var(--border)", paddingBottom: "0.75rem" }}
      >
        {section.title}
      </h2>
      {section.blocks.map((block, i) => (
        <RenderBlock key={i} block={block} />
      ))}
    </div>
  );
}

function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    );
  }
  if (block.type === "h4") {
    return <h4>{block.text}</h4>;
  }
  return null;
}
