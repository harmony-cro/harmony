import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { MainNav } from "@/components/MainNav";
import { MobileMenu } from "@/components/MobileMenu";

export async function Header() {
  const t = await getTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-surface-container-highest/30 bg-surface relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-surface-container-high focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-surface focus:outline-2 focus:outline-offset-2 focus:outline-primary"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-4 px-6 py-5 md:px-12 md:py-6">
        <Link
          href="/"
          className="font-headline text-2xl font-bold uppercase tracking-tighter text-on-surface antialiased transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Harmony
        </Link>

        <MainNav />

        <div className="flex items-center gap-6">
          <LocaleSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
