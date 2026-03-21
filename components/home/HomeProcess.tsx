import { getTranslations } from "next-intl/server";

const steps = [
  { num: "01", titleKey: "processStep01Title", bodyKey: "processStep01Body" },
  { num: "02", titleKey: "processStep02Title", bodyKey: "processStep02Body" },
  { num: "03", titleKey: "processStep03Title", bodyKey: "processStep03Body" },
  { num: "04", titleKey: "processStep04Title", bodyKey: "processStep04Body" },
] as const;

export async function HomeProcess() {
  const t = await getTranslations("Home");

  return (
    <section className="bg-surface-container-lowest px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="sticky top-32 font-headline text-4xl md:text-6xl">
            {t("processHeading")}
            <br />
            <span className="font-normal italic">{t("processHeadingItalic")}</span>
          </h2>
        </div>
        <div className="md:col-span-8">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`group cursor-pointer border-t border-outline-variant/30 px-2 py-12 transition-colors hover:bg-surface-container md:px-6 ${
                index === steps.length - 1
                  ? "border-b border-outline-variant/30"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8 md:gap-12">
                  <span className="font-label text-on-surface-variant">
                    {step.num}
                  </span>
                  <h4 className="font-headline text-2xl md:text-3xl">
                    {t(step.titleKey)}
                  </h4>
                </div>
                <span className="material-symbols-outlined text-primary transition-transform group-hover:rotate-45">
                  add
                </span>
              </div>
              <div className="mt-8 hidden max-w-2xl font-light leading-relaxed text-on-surface-variant group-hover:block">
                {t(step.bodyKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
