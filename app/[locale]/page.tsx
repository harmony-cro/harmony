import { HomeExpertise } from "@/components/home/HomeExpertise";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMetrics } from "@/components/home/HomeMetrics";
import { HomeProcess } from "@/components/home/HomeProcess";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <HomeMetrics />
      <HomeExpertise />
      <HomeProcess />
      <HomeFinalCta />
    </>
  );
}
