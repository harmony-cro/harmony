import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { stitchImages } from "@/lib/stitch-images";

export async function HomeHero() {
  const t = await getTranslations("Home");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-surface-container-lowest px-6 py-24 md:px-12">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-12 md:grid-cols-12">
        <div className="z-10 md:col-span-8">
          <h1 className="mb-8 font-headline text-5xl font-bold leading-tight tracking-tighter md:text-8xl">
            {t("heroLine1Pre")}
            <span className="text-gold-gradient">{t("heroLine1Gold")}</span>
            <br />
            {t("heroLine2")}
          </h1>
          <p className="mb-12 max-w-2xl font-body text-xl font-light leading-relaxed text-on-surface-variant md:text-2xl">
            {t("heroLead")}
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="bg-primary-container px-10 py-5 text-center font-label font-semibold uppercase tracking-widest text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              {t("heroCtaPrimary")}
            </Link>
            <Link
              href="/services"
              className="border border-outline/30 px-10 py-5 text-center font-label font-semibold uppercase tracking-widest text-on-surface transition-all hover:bg-surface-container-high"
            >
              {t("heroCtaSecondary")}
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:col-span-4">
          <div className="group relative aspect-[3/4] w-full overflow-hidden border-l border-outline-variant/20 bg-surface-container-high">
            <Image
              src={stitchImages.homeHero}
              alt={t("heroImageAlt")}
              fill
              className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-surface/40 mix-blend-multiply" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
    </section>
  );
}
