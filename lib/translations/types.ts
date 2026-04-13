export type ContentBlock =
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "h4"; text: string };

export type PolicySection = {
  title: string;
  blocks: ContentBlock[];
};

export type FeatureItem = {
  title: string;
  headline: string;
  description: string;
};

export type StepItem = {
  title: string;
  description: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ScreenItem = {
  tag: string;
  headline: string;
  description: string;
  bullets: string[];
};

export type Translations = {
  nav: {
    features: string;
    howItWorks: string;
    download: string;
    getApp: string;
    iosLabel: string;
    androidLabel: string;
  };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    support: string;
    madeWith: string;
    allRights: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineGradient: string;
    subheadline: string;
    iosButton: string;
    androidButton: string;
    socialProof: string;
    card1Text: string;
    card1Sub: string;
    card2Text: string;
    card2Sub: string;
  };
  features: {
    badge: string;
    headline: string;
    headlineGradient: string;
    headlineSuffix: string;
    subtitle: string;
    items: FeatureItem[];
  };
  howItWorks: {
    badge: string;
    headline: string;
    headlineGradient: string;
    subtitle: string;
    ctaButton: string;
    steps: StepItem[];
  };
  screenshots: {
    badge: string;
    headline: string;
    headlineGradient: string;
    subtitle: string;
    screens: ScreenItem[];
  };
  downloadCta: {
    badge: string;
    headline: string;
    headlineGradient: string;
    subtitle: string;
    iosLabel1: string;
    iosLabel2: string;
    androidLabel1: string;
    androidLabel2: string;
    stats: StatItem[];
  };
  privacyPolicy: {
    badge: string;
    title: string;
    lastUpdated: string;
    sections: PolicySection[];
  };
  terms: {
    badge: string;
    title: string;
    lastUpdated: string;
    sections: PolicySection[];
  };
};

export type Locale = "en" | "zh";
