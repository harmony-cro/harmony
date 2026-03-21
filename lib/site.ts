/** Public contact email — override with NEXT_PUBLIC_CONTACT_EMAIL */
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@harmony.example";

export const social = {
  facebook: "https://web.facebook.com/HarmonyDigitalAgency",
  instagram: "https://www.instagram.com/harmony_sb/",
} as const;

export function siteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harmony.example.com";
  return raw.replace(/\/$/, "");
}
