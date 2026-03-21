import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { stitchImages } from "@/lib/stitch-images";

export async function AboutContent() {
  const t = await getTranslations("About");

  return (
    <>
      <section className="mx-auto grid max-w-[1920px] grid-cols-1 items-end gap-12 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-8">
          <span className="mb-6 block font-label text-sm uppercase tracking-[0.2em] text-primary">
            {t("heroEyebrow")}
          </span>
          <h1 className="font-headline text-5xl leading-[1.1] tracking-tighter md:text-8xl">
            {t("heroPart1")}
            <span className="text-primary italic">{t("heroGold")}</span>
            {t("heroPart2")}
            <br />
            {t("heroPart3")}
          </h1>
        </div>
        <div className="pb-4 md:col-span-4">
          <p className="max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
            {t("heroLead")}
          </p>
        </div>
      </section>

      <section className="flex w-full flex-col gap-0 md:flex-row">
        <div className="relative h-[480px] w-full overflow-hidden md:h-[716px] md:w-2/3">
          <Image
            src={stitchImages.aboutWorkspace}
            alt={t("workspaceAlt")}
            fill
            className="object-cover brightness-75 grayscale transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40" />
        </div>
        <div className="flex w-full flex-col justify-center border-l border-outline-variant/10 bg-surface-container-low p-8 md:w-1/3 md:p-12">
          <h2 className="mb-8 font-headline text-3xl">{t("philosophyTitle")}</h2>
          <div className="space-y-12">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative pl-6">
                <div className="accordion-line absolute bottom-0 left-0 top-0" />
                <h3 className="mb-2 font-label text-xs uppercase tracking-widest text-primary">
                  {t(`philosophy${n}Title` as "philosophy1Title")}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {t(`philosophy${n}Body` as "philosophy1Body")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-lowest px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1920px]">
          <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-baseline">
            <h2 className="font-headline text-4xl">{t("collectiveTitle")}</h2>
            <Link
              href="/contact"
              className="border-b border-primary/30 pb-1 font-label text-xs uppercase tracking-widest text-primary transition-all hover:border-primary"
            >
              {t("collectiveCta")}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="group border border-outline-variant/5 bg-surface p-8 md:col-span-2 md:row-span-2">
              <div className="relative mb-8 aspect-[4/5] overflow-hidden">
                <Image
                  src={stitchImages.aboutBruno}
                  alt={t("brunoAlt")}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="mb-1 font-headline text-2xl">{t("brunoName")}</h3>
              <p className="mb-4 font-label text-sm uppercase tracking-tighter text-primary">
                {t("brunoRole")}
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
                {t("brunoBio")}
              </p>
            </div>
            <div className="flex flex-col justify-between bg-surface-container-low p-6 transition-colors duration-300 hover:bg-surface-container">
              <div className="relative mb-6 aspect-square overflow-hidden">
                <Image
                  src={stitchImages.aboutElena}
                  alt={t("elenaAlt")}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div>
                <h4 className="mb-1 font-headline text-xl">{t("elenaName")}</h4>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  {t("elenaRole")}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-surface-container-low p-6 transition-colors duration-300 hover:bg-surface-container">
              <div className="relative mb-6 aspect-square overflow-hidden">
                <Image
                  src={stitchImages.aboutSoren}
                  alt={t("sorenAlt")}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div>
                <h4 className="mb-1 font-headline text-xl">{t("sorenName")}</h4>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  {t("sorenRole")}
                </p>
              </div>
            </div>
            <div className="atelier-glass flex items-center justify-center p-12 text-center md:col-span-2">
              <p className="font-headline text-3xl leading-snug italic text-on-surface/90">
                {t("quoteBefore")}
                <span className="text-primary">{t("quoteGold")}</span>
                {t("quoteAfter")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1920px] border-t border-outline-variant/20 pt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="sticky top-40 font-headline text-4xl">
                {t("methodTitle")}
              </h2>
            </div>
            <div className="divide-y divide-outline-variant/10 md:col-span-8">
              {(
                [
                  {
                    phaseKey: "methodPhase01",
                    titleKey: "method1Title",
                    bodyKey: "method1Body",
                    icon: "architecture",
                  },
                  {
                    phaseKey: "methodPhase02",
                    titleKey: "method2Title",
                    bodyKey: "method2Body",
                    icon: "edit_square",
                  },
                  {
                    phaseKey: "methodPhase03",
                    titleKey: "method3Title",
                    bodyKey: "method3Body",
                    icon: "diamond",
                  },
                ] as const
              ).map((row) => (
                <div
                  key={row.phaseKey}
                  className="group cursor-default py-12 transition-all duration-500 hover:pl-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
                      {t(row.phaseKey)}
                    </span>
                    <span className="material-symbols-outlined text-outline-variant transition-colors group-hover:text-primary">
                      {row.icon}
                    </span>
                  </div>
                  <h3 className="my-4 font-headline text-3xl">{t(row.titleKey)}</h3>
                  <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {t(row.bodyKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-surface-container-lowest px-6 py-24 text-center md:px-12 md:py-32">
        <div className="max-w-3xl">
          <h2 className="mb-12 font-headline text-5xl md:text-7xl">
            {t("ctaTitleBefore")}
            <span className="text-primary italic">{t("ctaTitleGold")}</span>
            {t("ctaTitleAfter")}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-br from-primary to-primary-container px-16 py-6 font-label text-sm font-bold uppercase tracking-widest text-on-primary transition-transform active:scale-95"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
