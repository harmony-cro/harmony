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

/** Map / editorial image from Stitch contact prototype */
export const contactMapImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWjeFSA-LG-hVlMFQY8wG2kz3LTrOy_o4Ih6_q2tl0hs_z2TfXu0aP9yElMf6nslad3PyT-1LI0xbcHlJG4LIQLSwnjPfVP2Ts4AOq2O7OloqJJQu7IOWyUpmk6aXGSQpVYiuFAZ1pUdGRW2Gmc-2QRnp1g8EnvpNdJ2tkRBx-_EvQZfDpJ3KkKOVeN2P8IwFhEv4nkuCkzwPEdxVpaV9CFXHbWf0afcTD_-5DrKVIumCsPCm4hYKMzq9Tl7v5r7oq5sLtQwt3TZ1";

export function siteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harmony.example.com";
  return raw.replace(/\/$/, "");
}
