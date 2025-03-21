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

  t<P extends Path<Messages>>(path: P): PathValue<Messages, P>;
  t<P extends Path<Messages>>(
    path: P,
    options: Record<string, string | number>
  ): string;

  t<P extends Path<Messages>>(
    path: P,
    options?: Record<string, string | number>
  ): PathValue<Messages, P> | string {
    const message = path
      .split(".")
      // @ts-expect-error: Recursive type reduction is hard to type correctly
      .reduce((obj, key) => obj[key], this.messages) as unknown as string;

    if (!options) {
      return message;
    }

    return message.replace(/\{(\w+)\}/g, (_, key) => {
      return options[key]?.toString() ?? `{${key}}`;
    });
  }
}
