import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — PiggySplit",
  description: "Get help with PiggySplit. Contact our team or browse common questions.",
};

const faqs = [
  {
    q: "How do I create a shared wallet?",
    a: "Tap the + button on the Wallets screen, choose 'Shared wallet', give it a name, then invite friends from your friends list or by sharing the invite link.",
  },
  {
    q: "Can I split unevenly?",
    a: "Yes. When adding a transaction, tap 'Custom split' to assign specific amounts to each member instead of splitting equally.",
  },
  {
    q: "What counts as payment proof?",
    a: "Any photo or screenshot that shows the transfer — a bank transfer confirmation, PayPal receipt, or cash photo. The recipient confirms it in-app.",
  },
  {
    q: "What happens if someone disputes a payment?",
    a: "The payer and recipient can both leave comments on the transaction. The dispute stays open until both parties agree on the outcome.",
  },
  {
    q: "How do I add a friend?",
    a: "Go to the Friends tab and search by username or email. Or share your profile link from the Profile tab — anyone with the link can send you a friend request.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Passwords are hashed (never stored in plaintext), all traffic is encrypted over HTTPS, and API access requires JWT authentication. See our Privacy Policy for full details.",
  },
  {
    q: "Can I export my transaction history?",
    a: "Yes. Open any wallet and tap the export icon to download a CSV of all transactions.",
  },
  {
    q: "Does PiggySplit process actual payments?",
    a: "No. PiggySplit is a record-keeping tool. You pay each other through whatever method you prefer (bank transfer, cash, etc.) and log the proof in the app.",
  },
];

export default function Support() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-8 sm:px-12">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="text-5xl mb-4">🐷</div>
            <h1 className="text-4xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              How can we help?
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Find answers below, or reach out directly.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            <ContactCard
              icon="💬"
              title="In-app support"
              description="Fastest way to get help. Open PiggySplit, go to Profile, and tap Support."
              cta="Open the app"
              href="/download"
            />
            <ContactCard
              icon="📧"
              title="Email us"
              description="For account issues, billing, or anything else. We reply within 24 hours."
              cta="support@piggysplit.app"
              href="mailto:support@piggysplit.app"
            />
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black mb-6" style={{ color: "var(--text-primary)" }}>
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactCard({ icon, title, description, cta, href }: { icon: string; title: string; description: string; cta: string; href: string }) {
  return (
    <div
      className="rounded-3xl p-7 flex flex-col gap-4"
      style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: "var(--piggy-primary-light)" }}>
        {icon}
      </div>
      <div>
        <h3 className="font-black text-lg mb-1" style={{ color: "var(--text-primary)" }}>{title}</h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{description}</p>
      </div>
      <Link
        href={href}
        className="mt-auto text-sm font-bold py-2.5 px-5 rounded-xl text-center transition-all hover:opacity-80"
        style={{ background: "var(--piggy-primary-light)", color: "var(--piggy-primary-dark)" }}
      >
        {cta}
      </Link>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="group rounded-2xl overflow-hidden"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <summary
        className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-base select-none"
        style={{ color: "var(--text-primary)" }}
      >
        <span>{q}</span>
        <span className="ml-4 flex-shrink-0 text-lg transition-transform group-open:rotate-45" style={{ color: "var(--piggy-primary)" }}>+</span>
      </summary>
      <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {a}
      </div>
    </details>
  );
}
