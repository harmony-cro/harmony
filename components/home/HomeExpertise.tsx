import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { stitchImages } from "@/lib/stitch-images";

export async function HomeExpertise() {
  const t = await getTranslations("Home");

  return (
    <section className="bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-6 font-headline text-4xl md:text-6xl">
              {t("expertiseHeading")}
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <p className="hidden max-w-xs font-body text-sm italic text-on-surface-variant md:block">
            {t("expertiseAside")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-24 md:grid-cols-12 md:gap-y-0">
          <div className="mb-12 md:col-span-5 md:mb-0">
            <div className="group cursor-pointer">
              <div className="relative mb-8 aspect-video overflow-hidden">
                <Image
                  src={stitchImages.homeMarketing}
                  alt={t("exp1ImageAlt")}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <h3 className="mb-4 font-headline text-3xl transition-colors group-hover:text-primary">
                {t("exp1Title")}
              </h3>
              <p className="font-body leading-relaxed text-on-surface-variant">
                {t("exp1Body")}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:pt-48">
            <div className="group cursor-pointer">
              <div className="relative mb-8 aspect-square overflow-hidden">
                <Image
                  src={stitchImages.homeWeb}
                  alt={t("exp2ImageAlt")}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <h3 className="mb-4 font-headline text-3xl transition-colors group-hover:text-primary">
                {t("exp2Title")}
              </h3>
              <p className="font-body leading-relaxed text-on-surface-variant">
                {t("exp2Body")}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 md:-mt-24">
            <div className="group cursor-pointer">
              <div className="relative mb-8 aspect-[4/5] overflow-hidden">
                <Image
                  src={stitchImages.homeCommerce}
                  alt={t("exp3ImageAlt")}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <h3 className="mb-4 font-headline text-3xl transition-colors group-hover:text-primary">
                {t("exp3Title")}
              </h3>
              <p className="font-body leading-relaxed text-on-surface-variant">
                {t("exp3Body")}
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-32">
            <div className="group flex cursor-pointer items-start gap-8">
              <span className="font-headline text-6xl text-primary opacity-20">
                04
              </span>
              <div>
                <h3 className="mb-4 font-headline text-3xl transition-colors group-hover:text-primary">
                  {t("exp4Title")}
                </h3>
                <p className="mb-6 font-body leading-relaxed text-on-surface-variant">
                  {t("exp4Body")}
                </p>
                <Link
                  href="/services"
                  className="border-b border-primary pb-1 font-label text-sm uppercase tracking-widest text-primary transition-opacity hover:opacity-70"
                >
                  {t("exp4Link")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
