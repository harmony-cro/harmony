import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

const nav = [
  { href: "/", key: "home" as const },
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export async function Header() {
  const t = await getTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-ring"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Harmony
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label={t("mainAria")}
        >
          {nav.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <details className="relative md:hidden">
            <summary
              className="cursor-pointer list-none rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
              aria-label={t("openMenu")}
            >
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-surface py-2 shadow-lg">
              {nav.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-background"
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </details>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
