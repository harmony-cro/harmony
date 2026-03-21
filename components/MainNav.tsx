"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const nav = [
  { href: "/", key: "home" as const },
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

function linkClass(active: boolean) {
  const base =
    "font-headline text-sm tracking-tight antialiased transition-colors duration-300";
  if (active) {
    return `${base} border-b-2 border-primary pb-1 text-primary`;
  }
  return `${base} text-on-surface-variant hover:text-on-surface`;
}

export function MainNav() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-12 md:flex" aria-label={t("mainAria")}>
      {nav.map(({ href, key }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link key={key} href={href} className={linkClass(active)}>
            {t(key)}
          </Link>
        );
      })}
    </nav>
  );
}

export function MainNavMobile({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 py-2" aria-label={t("mainAria")}>
      {nav.map(({ href, key }) => {
        const active =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={key}
            href={href}
            onClick={onNavigate}
            className={`px-4 py-3 font-headline text-sm tracking-tight ${
              active
                ? "bg-surface-container-high text-primary"
                : "text-on-surface hover:bg-surface-container"
            }`}
          >
            {t(key)}
          </Link>
        );
      })}
    </nav>
  );
}
