/** Public contact email — override with NEXT_PUBLIC_CONTACT_EMAIL */
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@harmony.hr";

/** Inquiry phone — override with NEXT_PUBLIC_CONTACT_PHONE */
export const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+385 1 234 5678";

export const officeAddress = {
  lines: ["Radnička cesta 80", "10000 Zagreb, Hrvatska"],
} as const;

export const social = {
  facebook: "https://web.facebook.com/HarmonyDigitalAgency",
  instagram: "https://www.instagram.com/harmony_sb/",
} as const;

export const contactMapImageUrl = "/images/contactMapImageUrl.png";

export function siteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harmony.example.com";
  return raw.replace(/\/$/, "");
}
