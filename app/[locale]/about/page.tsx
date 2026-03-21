import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
        {t("title")}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">
        {t("lead")}
      </p>
      <p className="mt-4 leading-relaxed text-muted">{t("body1")}</p>
      <p className="mt-4 leading-relaxed text-muted">{t("body2")}</p>
      <p className="mt-10 rounded-xl border border-dashed border-border bg-surface px-4 py-6 text-sm text-muted">
        {t("placeholder")}
      </p>
    </div>
  );
}
