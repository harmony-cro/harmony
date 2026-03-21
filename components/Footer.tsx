import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { contactEmail, contactPhone, officeAddress, social } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="mt-auto border-t border-surface-container-highest/20 bg-surface-container-lowest">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-12 px-6 py-16 font-headline font-light tracking-wide md:grid-cols-3 md:px-12 md:py-20">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold text-on-surface">
            {t("brandLockup")}
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-on-surface-variant">
            {t("tagline")}
          </p>
          <div className="mt-2 flex gap-4">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined cursor-pointer text-primary-container transition-opacity hover:opacity-70"
              aria-label="Instagram"
            >
              public
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="material-symbols-outlined cursor-pointer text-primary-container transition-opacity hover:opacity-70"
              aria-label="Facebook"
            >
              language
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="material-symbols-outlined cursor-pointer text-primary-container transition-opacity hover:opacity-70"
              aria-label={t("emailAria")}
            >
              alternate_email
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="mb-2 text-xs font-bold uppercase tracking-widest text-on-surface">
            {t("navHeading")}
          </h5>
          <Link
            href="/services"
            className="text-on-surface-variant underline-offset-4 transition-all hover:translate-x-1 hover:text-primary hover:underline"
          >
            {tNav("services")}
          </Link>
          <span className="text-on-surface-variant/50 text-sm">{t("portfolioSoon")}</span>
          <Link
            href="/about"
            className="text-on-surface-variant underline-offset-4 transition-all hover:translate-x-1 hover:text-primary hover:underline"
          >
            {t("processLink")}
          </Link>
          <span className="text-on-surface-variant/50 text-sm">{t("privacySoon")}</span>
          <span className="text-on-surface-variant/50 text-sm">{t("termsSoon")}</span>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="mb-2 text-xs font-bold uppercase tracking-widest text-on-surface">
            {t("officeHeading")}
          </h5>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            {officeAddress.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-4 text-sm text-on-surface-variant">
            <a
              href={`mailto:${contactEmail}`}
              className="transition-colors hover:text-primary"
            >
              {contactEmail}
            </a>
            <br />
            <a
              href={`tel:${contactPhone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-primary"
            >
              {contactPhone}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-surface-container-highest/10 px-6 py-8 text-center md:px-12 md:text-left">
        <span className="text-xs text-on-surface-variant">
          © {new Date().getFullYear()} {t("copyright")}
        </span>
      </div>
    </footer>
  );
}
