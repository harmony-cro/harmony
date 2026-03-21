import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

const paths = ["", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
      });
    }
  }

  return entries;
}
