import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business Operations + AI Automation`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Business Operations, automation, and AI insights that improve conversions and reduce manual work.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Business Operations + AI Automation`,
    description:
      "Business Operations, automation, and AI insights that improve conversions and reduce manual work.",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Business Operations + AI Automation`,
    description:
      "Business Operations, automation, and AI insights that improve conversions and reduce manual work."
  }
};

export const buildCanonical = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
