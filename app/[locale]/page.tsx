import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const services = [
    { title: t("svcMarketingTitle"), body: t("svcMarketingBody") },
    { title: t("svcWebTitle"), body: t("svcWebBody") },
    { title: t("svcShopTitle"), body: t("svcShopBody") },
  ];

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t("heroEyebrow")}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t("heroLead")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {t("heroCtaPrimary")}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {t("heroCtaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
          {t("servicesHeading")}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{t("servicesIntro")}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-accent text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {t("ctaBandTitle")}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
              {t("ctaBandBody")}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t("ctaBandButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
