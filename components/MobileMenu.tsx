"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { MainNavMobile } from "@/components/MainNav";

export function MobileMenu() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="material-symbols-outlined text-on-surface"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? t("closeMenu") : t("openMenu")}
      >
        {open ? "close" : "menu"}
      </button>
      {open ? (
        <div
          id="mobile-nav-panel"
          className="absolute left-0 right-0 top-full z-50 border-b border-surface-container-highest/30 bg-surface shadow-lg"
        >
          <MainNavMobile onNavigate={() => setOpen(false)} />
        </div>
      ) : null}
    </div>
  );
}
