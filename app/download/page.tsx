import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download PiggySplit — iOS & Android",
  description: "Download PiggySplit for free on iOS and Android. Start splitting expenses with your friends today.",
};

export default function Download() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-8 sm:px-12">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6"><img src="/PiggySplit-icon.png" className="w-20 h-20 mx-auto" alt="PiggySplit" /></div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
              Get{" "}
              <span className="gradient-text">PiggySplit</span>
            </h1>
            <p className="text-xl max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              Free to download. Free to use. Available on both platforms.
            </p>
          </div>

          {/* Download cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <DownloadCard
              platform="iOS"
              icon="🍎"
              badgeSrc="/App_Store_Badge.svg"
              badgeAlt="Download on the App Store"
              title="App Store"
              description="iPhone and iPad. Requires iOS 16.0 or later."
              bg="var(--piggy-primary-light)"
              available={false}
            />
            <DownloadCard
              platform="Android"
              icon="🤖"
              badgeSrc="/Google_Play_Badge_Web.svg"
              badgeAlt="Get it on Google Play"
              title="Google Play"
              description="Android phones and tablets. Requires Android 10+."
              bg="var(--piggy-accent-light)"
              available={false}
              status="In internal testing"
            />
          </div>

          {/* Android tester call-out */}
          <div
            className="rounded-2xl p-6 text-center mb-16"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm font-bold" style={{ color: "var(--text-secondary)" }}>
              🤖 We&apos;re looking for Android testers
            </p>
            <p className="text-sm mt-1 max-w-md mx-auto" style={{ color: "var(--text-tertiary)" }}>
              PiggySplit for Android is in internal testing. Want in? Email{" "}
              <a href="mailto:beta@piggysplit.com?subject=Android%20tester" className="font-bold" style={{ color: "var(--piggy-primary)" }}>
                beta@piggysplit.com
              </a>{" "}
              with the Google account you use on Google Play, and we&apos;ll send you an invite. The App Store release is coming soon.
            </p>
          </div>

          {/* What's included */}
          <h2 className="text-2xl font-black text-center mb-8" style={{ color: "var(--text-primary)" }}>
            Everything included. Always free.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "💳", label: "Shared wallets" },
              { icon: "⚖️", label: "Smart expense splitting" },
              { icon: "📸", label: "Payment proof uploads" },
              { icon: "🤝", label: "Friends system" },
              { icon: "📊", label: "Spending analytics" },
              { icon: "🔁", label: "Recurring transactions" },
              { icon: "🔔", label: "Real-time notifications" },
              { icon: "📎", label: "CSV export" },
              { icon: "🌐", label: "English & 中文 support" },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <span className="text-xl">{f.icon}</span>
                <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{f.label}</span>
                <span className="ml-auto text-xs font-bold" style={{ color: "var(--success)" }}>Free</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function DownloadCard({
  icon,
  badgeSrc,
  badgeAlt,
  title,
  description,
  bg,
  available,
  status = "Coming soon",
}: {
  platform: string;
  icon: string;
  badgeSrc: string;
  badgeAlt: string;
  title: string;
  description: string;
  bg: string;
  available: boolean;
  status?: string;
}) {
  return (
    <div
      className="rounded-3xl p-8 flex flex-col gap-5"
      style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background: bg }}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-black mb-1" style={{ color: "var(--text-primary)" }}>{title}</h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{description}</p>
      </div>
      <div className="mt-auto cursor-not-allowed opacity-60 flex justify-center">
        <img src={badgeSrc} alt={badgeAlt} className="h-14 w-auto" />
      </div>
      {!available && (
        <p className="text-center text-xs font-bold" style={{ color: "var(--text-tertiary)" }}>
          {status}
        </p>
      )}
    </div>
  );
}
