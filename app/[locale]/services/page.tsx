import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

function BulletList({ text }: { text: string }) {
  const items = text.split("|").map((s) => s.trim());
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Services");

  const blocks = [
    {
      title: t("marketingTitle"),
      lead: t("marketingLead"),
      bullets: t("marketingBullets"),
    },
    {
      title: t("webTitle"),
      lead: t("webLead"),
      bullets: t("webBullets"),
    },
    {
      title: t("shopTitle"),
      lead: t("shopLead"),
      bullets: t("shopBullets"),
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{t("intro")}</p>

      <div className="mt-14 space-y-16 md:space-y-20">
        {blocks.map((block, i) => (
          <section
            key={block.title}
            className={`grid gap-8 md:grid-cols-12 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div
              className={`md:col-span-4 ${i % 2 === 1 ? "md:order-2" : ""}`}
            >
              <span className="text-sm font-mono text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                {block.title}
              </h2>
            </div>
            <div
              className={`rounded-2xl border border-border bg-surface p-6 md:col-span-8 md:p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}
            >
              <p className="text-foreground leading-relaxed">{block.lead}</p>
              <BulletList text={block.bullets} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
