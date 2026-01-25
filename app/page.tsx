import type { Metadata } from "next";
import Script from "next/script";
import Hero from "../components/sections/Hero";
import LogoMarquee from "../components/sections/LogoMarquee";
import WhatWeDo from "../components/sections/WhatWeDo";
import Solutions from "../components/sections/Solutions";
import HowItWorks from "../components/sections/HowItWorks";
import CaseStudies from "../components/sections/CaseStudies";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import { buildCanonical } from "../lib/seo";
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Business Operations + AI Automation",
  description:
    "Business Operations and AI automation services that improve conversions, reduce manual work, and deliver clear reporting.",
  alternates: {
    canonical: buildCanonical("/")
  },
  openGraph: {
    title: "Business Operations + AI Automation",
    description:
      "Business Operations and AI automation services that improve conversions, reduce manual work, and deliver clear reporting.",
    url: SITE_URL
  },
  twitter: {
    title: "Business Operations + AI Automation",
    description:
      "Business Operations and AI automation services that improve conversions, reduce manual work, and deliver clear reporting."
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS,
    addressCountry: "IN"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_ADDRESS,
    addressCountry: "IN"
  }
};

const crmServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Operations",
  provider: {
    "@type": "Organization",
    name: SITE_NAME
  },
  areaServed: "IN",
  serviceType: "Business Operations"
};

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation",
  provider: {
    "@type": "Organization",
    name: SITE_NAME
  },
  areaServed: "IN",
  serviceType: "AI Automation"
};

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationSchema, localBusinessSchema, crmServiceSchema, aiServiceSchema]
          })
        }}
      />
      <Hero />
      <LogoMarquee />
      <WhatWeDo />
      <Solutions />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
