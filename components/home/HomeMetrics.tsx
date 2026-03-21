import { Fragment } from "react";
import { getTranslations } from "next-intl/server";

export async function HomeMetrics() {
  const t = await getTranslations("Home");

  const items = [
    { value: t("metric1Value"), label: t("metric1Label") },
    { value: t("metric3Value"), label: t("metric3Label") },
    { value: t("metric4Value"), label: t("metric4Label") },
  ];

  return (
    <section className="border-y border-outline-variant/10 bg-surface-container-low px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between gap-8 md:gap-0">
        {items.map((item, i) => (
          <Fragment key={item.label}>
            {i > 0 ? (
              <div
                className="hidden h-12 w-px shrink-0 bg-outline-variant/20 md:block"
                aria-hidden
              />
            ) : null}
            <div className="flex flex-col">
              <span className="font-headline text-3xl text-primary">
                {item.value}
              </span>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                {item.label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
