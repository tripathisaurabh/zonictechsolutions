import type { Metadata } from "next";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import ContactForm from "../../components/ContactForm";
import { buildCanonical } from "../../lib/seo";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, WHATSAPP_LINK, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Talk to a CRM Ops + AI Expert",
  description: "Tell us what's broken. We'll suggest a clear CRM + AI plan.",
  alternates: {
    canonical: buildCanonical("/contact")
  },
  openGraph: {
    title: "Talk to a CRM Ops + AI Expert",
    description: "Tell us what's broken. We'll suggest a clear CRM + AI plan.",
    url: `${SITE_URL}/contact`
  },
  twitter: {
    title: "Talk to a CRM Ops + AI Expert",
    description: "Tell us what's broken. We'll suggest a clear CRM + AI plan."
  }
};

const contactOptions = [
  {
    title: "Email",
    detail: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`
  },
  {
    title: "Phone",
    detail: SITE_PHONE_DISPLAY,
    href: `tel:${SITE_PHONE}`
  },
  {
    title: "WhatsApp",
    detail: "Chat on WhatsApp",
    href: WHATSAPP_LINK
  }
];

export default function ContactPage() {
  return (
    <section className="section bg-slate-50">
      <Container>
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-slate-900">Talk to a CRM Ops + AI Expert</h1>
          <p className="mt-3 text-base text-slate-600">
            Tell us what's broken. We'll suggest a clear CRM + AI plan.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex justify-center">
            <Card id="book-demo" className="w-full max-w-lg scroll-mt-24 overflow-hidden p-0">
              <div className="border-b border-slate-200 px-4 py-2 text-center">
                <h2 className="text-base font-semibold text-slate-900">Book a Consultation</h2>
                <p className="mt-1 text-xs text-slate-600">Pick a time that works for you.</p>
              </div>
              <div className="p-2">
                <div
                  className="calendly-inline-widget h-[520px] w-full min-w-[320px]"
                  data-url="https://calendly.com/admin-zonictechsolutions/30min"
                />
              </div>
            </Card>
          </div>
          <div className="w-full">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-4">
                {contactOptions.map((option) => (
                  <Card key={option.title}>
                    <p className="text-sm font-semibold text-slate-900">{option.title}</p>
                    <a
                      className="mt-2 inline-block text-sm text-indigo-600"
                      href={option.href}
                      target={option.title === "WhatsApp" ? "_blank" : undefined}
                      rel={option.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    >
                      {option.detail}
                    </a>
                  </Card>
                ))}
                <Card>
                  <p className="text-sm font-semibold text-slate-900">Location</p>
                  <p className="mt-2 text-sm text-slate-600">{SITE_ADDRESS}</p>
                </Card>
                <Card className="overflow-hidden p-0">
                  <div className="h-64 w-full">
                    <iframe
                      title="Zonic Tech Solutions location"
                      src="https://www.google.com/maps?q=Noida,+UP,+India&output=embed"
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Card>
              </div>
              <Card>
                <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
                <p className="mt-2 text-sm text-slate-600">We usually respond within one business day.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
            </div>
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </div>
        </div>
      </Container>
    </section>
  );
}
