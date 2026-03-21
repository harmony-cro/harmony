import { contactEmail, social } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-muted">{t("lead")}</p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            {t("emailLabel")}
          </h2>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-2 inline-block text-lg text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {contactEmail}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            {t("socialHeading")}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-4">
            <li>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted">{t("note")}</p>
      </div>
    </div>
  );
}
