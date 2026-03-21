import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export default async function NotFound() {
  let locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }
  setRequestLocale(locale);
  const t = await getTranslations("NotFound");

  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="font-headline text-3xl font-semibold text-on-surface">
        {t("title")}
      </h1>
      <p className="mt-3 text-on-surface-variant">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-block bg-primary-container px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-on-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {t("homeLink")}
      </Link>
    </div>
  );
}
