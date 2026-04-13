import { en } from "./en";
import { zh } from "./zh";
import type { Translations, Locale } from "./types";

export const translations: Record<Locale, Translations> = { en, zh };

export type { Translations, Locale };
export { en, zh };
