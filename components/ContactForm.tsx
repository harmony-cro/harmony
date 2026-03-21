"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-body text-lg text-on-surface-variant">{t("formThanks")}</p>
    );
  }

  return (
    <form className="relative z-10 space-y-16" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative">
          <label
            htmlFor="contact-name"
            className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-on-surface-variant"
          >
            {t("formNameLabel")}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t("formNamePlaceholder")}
            className="w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-4 font-headline text-xl text-on-surface placeholder:text-on-surface-variant/30 focus:border-b-2 focus:border-primary focus:outline-none focus:ring-0"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="contact-email"
            className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-on-surface-variant"
          >
            {t("formEmailLabel")}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t("formEmailPlaceholder")}
            className="w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-4 font-headline text-xl text-on-surface placeholder:text-on-surface-variant/30 focus:border-b-2 focus:border-primary focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div className="relative">
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-on-surface-variant"
        >
          {t("formMessageLabel")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder={t("formMessagePlaceholder")}
          className="w-full resize-none border-0 border-b border-outline-variant/40 bg-transparent px-0 py-4 font-headline text-xl text-on-surface placeholder:text-on-surface-variant/30 focus:border-b-2 focus:border-primary focus:outline-none focus:ring-0"
        />
      </div>
      <div className="pt-8">
        <button
          type="submit"
          className="group relative flex items-center justify-center overflow-hidden bg-primary-container px-12 py-6 text-xs font-bold uppercase tracking-[0.4em] text-on-primary transition-colors duration-500 hover:bg-primary"
        >
          <span className="relative z-10">{t("formSubmit")}</span>
          <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
        </button>
      </div>
    </form>
  );
}
