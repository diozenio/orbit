import type { LocaleSchema } from "./locales/schema";

type Path<T> = T extends string
  ? ""
  : T extends object
  ? {
      [K in keyof T]: `${K & string}${Path<T[K]> extends "" ? "" : "."}${Path<
        T[K]
      >}`;
    }[keyof T]
  : "";

type PathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? PathValue<T[Key], Rest>
    : never
  : P extends keyof T
  ? T[P]
  : never;

export type Language = "pt-BR" | "en-US";
export type Messages = LocaleSchema;

export class I18nService {
  private messages: Messages;
  private currentLanguage: Language;

  constructor(
    initialLanguage: Language,
    translations: Record<Language, Messages>
  ) {
    this.currentLanguage = initialLanguage;
    this.messages = translations[initialLanguage];
  }

  setLanguage(
    language: Language,
    translations: Record<Language, Messages>
  ): void {
    this.currentLanguage = language;
    this.messages = translations[language];
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  t<P extends Path<Messages>>(path: P): PathValue<Messages, P> {
    // @ts-expect-error: Recursive type reduction is hard to type correctly
    return path.split(".").reduce((obj, key) => obj[key], this.messages);
  }
}
