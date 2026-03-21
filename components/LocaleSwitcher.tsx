"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{t("label")}</span>
      <div className="flex rounded-md border border-border bg-surface p-0.5 text-sm">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`rounded px-2.5 py-1 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
              locale === loc
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
            aria-pressed={locale === loc}
            aria-label={t(loc)}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
