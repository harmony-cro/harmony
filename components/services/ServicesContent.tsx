import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { stitchImages } from "@/lib/stitch-images";

export async function ServicesContent() {
  const t = await getTranslations("Services");

  return (
    <>
      <section className="relative overflow-hidden bg-surface px-6 pb-20 pt-24 md:px-12 md:pt-32">
        <div className="relative z-10 mx-auto grid max-w-[1920px] grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter text-on-surface md:text-8xl">
              {t("heroLine1")}
              <span className="font-light italic text-primary">{t("heroLineGold")}</span>
              {t("heroLine2")}
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-on-surface-variant">
              {t("heroLead")}
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
          <div className="h-full w-full bg-gradient-to-l from-primary-container to-transparent" />
        </div>
      </section>

      <section className="border-t border-outline-variant/10 bg-surface-container-lowest px-6 py-24 md:px-12">
        <div className="editorial-grid mx-auto max-w-[1920px] gap-0">
          <div className="mb-12 border-outline-variant/20 pr-0 md:mb-0 md:border-r md:pr-12">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
              {t("s1Eyebrow")}
            </span>
            <h2 className="mt-4 font-headline text-4xl text-on-surface">
              {t("s1TitleLine1")}
              <br />
              {t("s1TitleLine2")}
            </h2>
          </div>
          <div className="flex flex-col justify-center px-0 md:px-12">
            <p className="text-2xl font-light italic leading-relaxed text-on-surface">
              {t("s1Quote")}
            </p>
            <div className="mt-12 space-y-6">
              <div className="group cursor-pointer">
                <h3 className="font-headline text-xl text-on-surface transition-colors group-hover:text-primary">
                  {t("s1Block1Title")}
                </h3>
                <p className="mt-2 max-w-lg font-light text-on-surface-variant">
                  {t("s1Block1Body")}
                </p>
              </div>
              <div className="group cursor-pointer">
                <h3 className="font-headline text-xl text-on-surface transition-colors group-hover:text-primary">
                  {t("s1Block2Title")}
                </h3>
                <p className="mt-2 max-w-lg font-light text-on-surface-variant">
                  {t("s1Block2Body")}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-end md:mt-0 md:justify-end">
            <Link
              href="/contact"
              className="bg-primary-container px-10 py-5 text-sm font-bold uppercase tracking-widest text-on-primary transition-all duration-300 hover:bg-primary"
            >
              {t("s1Cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-0 px-6 md:grid-cols-12 md:px-12">
          <div className="relative z-10 md:col-span-5">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
              {t("s2Eyebrow")}
            </span>
            <h2 className="mt-6 font-headline text-5xl leading-[1.1] text-on-surface md:text-6xl">
              {t("s2TitleLine1")}
              <br />
              <span className="italic text-primary-fixed-dim">{t("s2TitleGold")}</span>
            </h2>
            <p className="mt-8 max-w-md font-light leading-relaxed text-on-surface-variant">
              {t("s2Lead")}
            </p>
            <ul className="mt-12 space-y-4">
              {(["s2Li1", "s2Li2", "s2Li3"] as const).map((key) => (
                <li key={key} className="flex items-center gap-4 text-on-surface">
                  <span className="material-symbols-outlined text-sm text-primary">square</span>
                  <span className="font-label text-sm uppercase tracking-wide">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-16 md:col-span-7 md:mt-0">
            <div className="group relative flex aspect-[16/10] items-center justify-center overflow-hidden border-[0.5px] border-outline-variant/30 bg-surface-container-high">
              <Image
                src={stitchImages.servicesWeb}
                alt={t("s2ImageAlt")}
                fill
                className="object-cover opacity-60 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1920px]">
          <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-baseline">
            <div>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
                {t("s3Eyebrow")}
              </span>
              <h2 className="mt-4 font-headline text-5xl text-on-surface">
                {t("s3Title")}
              </h2>
            </div>
            <p className="hidden max-w-xs text-right font-light text-on-surface-variant md:block">
              {t("s3Aside")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="border border-outline-variant/10 bg-surface-container-lowest p-12 transition-all duration-500 hover:border-primary/30 md:col-span-2">
              <span className="material-symbols-outlined mb-8 text-4xl text-primary">
                shopping_bag
              </span>
              <h3 className="mb-4 font-headline text-2xl text-on-surface">
                {t("s3CardMainTitle")}
              </h3>
              <p className="font-light leading-relaxed text-on-surface-variant">
                {t("s3CardMainBody")}
              </p>
            </div>
            <div className="flex flex-col justify-between bg-surface-container p-12 transition-colors hover:bg-surface-container-high">
              <h4 className="font-label text-sm uppercase tracking-widest text-primary-fixed">
                {t("s3Small1Title")}
              </h4>
              <p className="mt-4 text-sm font-light text-on-surface-variant">
                {t("s3Small1Body")}
              </p>
            </div>
            <div className="flex flex-col justify-between bg-surface-container p-12 transition-colors hover:bg-surface-container-high">
              <h4 className="font-label text-sm uppercase tracking-widest text-primary-fixed">
                {t("s3Small2Title")}
              </h4>
              <p className="mt-4 text-sm font-light text-on-surface-variant">
                {t("s3Small2Body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-surface-container-lowest py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary">
            {t("s4Eyebrow")}
          </span>
          <h2 className="mt-8 font-headline text-5xl text-on-surface md:text-6xl">
            {t("s4TitleBefore")}
            <span className="italic">{t("s4TitleItalic")}</span>
          </h2>
          <div className="mt-20 flex flex-col gap-24 text-left">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 h-full w-px bg-primary" />
              <h3 className="font-headline text-2xl uppercase tracking-tight text-on-surface">
                {t("s4Block1Title")}
              </h3>
              <p className="mt-4 text-lg font-light leading-relaxed text-on-surface-variant">
                {t("s4Block1Body")}
              </p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 h-full w-px bg-outline-variant" />
              <h3 className="font-headline text-2xl uppercase tracking-tight text-on-surface">
                {t("s4Block2Title")}
              </h3>
              <p className="mt-4 text-lg font-light leading-relaxed text-on-surface-variant">
                {t("s4Block2Body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-center md:px-12">
        <div className="mx-auto max-w-[1920px]">
          <h2 className="font-headline text-4xl font-bold text-on-primary md:text-5xl">
            {t("closingTitleBefore")}
            <span className="italic">{t("closingTitleItalic")}</span>
            {t("closingTitleAfter")}
          </h2>
          <Link
            href="/contact"
            className="mt-12 inline-block border-2 border-on-primary px-16 py-6 text-sm font-bold uppercase tracking-[0.4em] text-on-primary transition-all duration-500 hover:bg-on-primary hover:text-primary"
          >
            {t("closingCta")}
          </Link>
        </div>
      </section>
    </>
  );
}
