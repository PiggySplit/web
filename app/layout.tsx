import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "PiggySplit — Split the bill. Not the friendship.",
  description: "The simplest way to split expenses with friends and groups. Create shared wallets, track who owes what, and settle up with proof — all in one place.",
  keywords: ["expense splitting", "bill splitting", "shared expenses", "group payments", "money management"],
  openGraph: {
    title: "PiggySplit — Split the bill. Not the friendship.",
    description: "The simplest way to split expenses with friends and groups.",
    type: "website",
    siteName: "PiggySplit",
  },
  twitter: {
    card: "summary_large_image",
    title: "PiggySplit",
    description: "The simplest way to split expenses with friends and groups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
