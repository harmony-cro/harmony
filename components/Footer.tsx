import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { social } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            Harmony
          </p>
          <p className="mt-1 text-sm text-muted">{t("tagline")}</p>
          <p className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} Harmony. {t("rights")}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <nav
            className="flex flex-wrap gap-4 text-sm"
            aria-label={t("navAria")}
          >
            <Link
              href="/services"
              className="text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {tNav("services")}
            </Link>
            <Link
              href="/contact"
              className="text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {tNav("contact")}
            </Link>
            <a
              href={social.facebook}
              className="text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={social.instagram}
              className="text-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
