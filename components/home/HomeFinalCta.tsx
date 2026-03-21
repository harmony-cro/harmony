import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function HomeFinalCta() {
  const t = await getTranslations("Home");

  return (
    <section className="relative overflow-hidden bg-surface px-6 py-24 text-center md:px-12 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-12 font-headline text-5xl md:text-7xl">
          {t("finalCtaTitle")}
        </h2>
        <p className="mx-auto mb-16 max-w-xl font-body text-xl font-light text-on-surface-variant">
          {t("finalCtaLead")}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary px-16 py-6 font-label font-bold uppercase tracking-[0.2em] text-on-primary shadow-xl transition-all hover:bg-primary-fixed"
        >
          {t("finalCtaButton")}
        </Link>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-5">
        <div className="absolute left-1/4 top-1/2 h-full w-px -translate-y-1/2 bg-outline" />
        <div className="absolute right-1/4 top-1/2 h-full w-px -translate-y-1/2 bg-outline" />
      </div>
    </section>
  );
}
