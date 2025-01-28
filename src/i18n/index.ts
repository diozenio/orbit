import { enUS } from "./locales/en-US";
import { ptBR } from "./locales/pt-BR";
import { I18nService, type Language, type Messages } from "./I18nService";

export const translations: Record<Language, Messages> = {
  "pt-BR": ptBR,
  "en-US": enUS,
} as const;

export const i18n = new I18nService("en-US", translations);

export type { Language, Messages };
export { I18nService };
