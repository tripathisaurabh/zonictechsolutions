import type { Metadata } from "next";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks — we received your request and will be in touch shortly.",
  openGraph: {
    title: "Thank You",
    description: "Thanks — we received your request and will be in touch shortly.",
    url: `${SITE_URL}/thank-you`
  },
  twitter: {
    title: "Thank You",
    description: "Thanks — we received your request and will be in touch shortly."
  }
};

export default function ThankYouPage() {
  return (
    <section className="section bg-white">
      <Container className="text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Thanks — we received your request</h1>
        <p className="mt-4 text-base text-slate-600">
          Our team will review your details and reach out within one business day with next steps.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
