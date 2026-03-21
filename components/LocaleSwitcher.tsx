"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

function localeLinkClass(active: boolean) {
  const base =
    "uppercase tracking-widest transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  if (active) {
    return `${base} font-semibold text-primary`;
  }
  return `${base} text-on-surface-variant`;
}

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1 font-headline text-sm tracking-tight text-primary"
      role="group"
      aria-label={t("label")}
    >
      <span className="sr-only">{t("label")}</span>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 ? (
            <span className="mx-2 text-on-surface-variant" aria-hidden>
              |
            </span>
          ) : null}
          {locale === loc ? (
            <span
              className={localeLinkClass(true)}
              aria-current="true"
              aria-label={t(loc)}
            >
              {loc.toUpperCase()}
            </span>
          ) : (
            <Link
              href={pathname}
              locale={loc}
              prefetch={false}
              replace
              scroll={false}
              className={localeLinkClass(false)}
              aria-label={t(loc)}
            >
              {loc.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
