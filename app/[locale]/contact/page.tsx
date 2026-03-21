import { ContactForm } from "@/components/ContactForm";
import {
  contactEmail,
  contactMapImageUrl,
  contactPhone,
  officeAddress,
  social,
} from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

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
    <section className="mx-auto max-w-[1920px] items-start gap-24 px-6 py-12 lg:grid lg:grid-cols-[1fr_2fr] lg:px-12 lg:py-16">
      <div className="space-y-24 py-8 lg:py-12">
        <header className="space-y-6">
          <h1 className="font-headline text-5xl leading-tight tracking-tight lg:text-7xl">
            {t("pageTitleBefore")}
            <span className="text-primary italic">{t("pageTitleGold")}</span>
            {t("pageTitleAfter")}
          </h1>
          <p className="max-w-md text-lg font-light leading-relaxed text-on-surface-variant">
            {t("pageLead")}
          </p>
        </header>

        <div className="space-y-12">
          <div className="space-y-8">
            <div className="group">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
                {t("detailEmailEyebrow")}
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="font-headline text-2xl transition-colors group-hover:text-primary"
              >
                {contactEmail}
              </a>
            </div>
            <div className="group">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
                {t("detailPhoneEyebrow")}
              </p>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="font-headline text-2xl transition-colors group-hover:text-primary"
              >
                {contactPhone}
              </a>
            </div>
            <div className="group">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
                {t("detailLocationEyebrow")}
              </p>
              <p className="font-headline text-2xl transition-colors group-hover:text-primary">
                {officeAddress.lines.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-8 pt-6">
            <Link
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-on-surface-variant transition-all hover:text-primary"
            >
              <span className="text-xs font-semibold uppercase tracking-widest">
                Instagram
              </span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </Link>
            <Link
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-on-surface-variant transition-all hover:text-primary"
            >
              <span className="text-xs font-semibold uppercase tracking-widest">
                Facebook
              </span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-l border-outline-variant/20 bg-surface-container-lowest p-8 lg:p-24">
        <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        <ContactForm />
        <div className="relative mt-24 h-96 overflow-hidden bg-surface-container-low">
          <Image
            src={contactMapImageUrl}
            alt={t("mapAlt")}
            fill
            className="object-cover grayscale opacity-40 mix-blend-luminosity"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
          <div className="absolute bottom-8 left-8 flex items-center space-x-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t("mapCaption")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
