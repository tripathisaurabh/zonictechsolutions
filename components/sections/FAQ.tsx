import Accordion from "../ui/Accordion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const faqItems = [
  {
    id: "faq-crm",
    title: "What CRMs do you work with?",
    content: "We primarily support Zoho CRM but also work with HubSpot, Salesforce, and custom CRMs."
  },
  {
    id: "faq-timeline",
    title: "How long does implementation take?",
    content: "Most Business Operations builds are completed in 2-6 weeks depending on integrations."
  },
  {
    id: "faq-fix",
    title: "Do you fix existing CRM setups?",
    content: "Yes. We audit and clean existing CRMs, then redesign workflows for better adoption."
  },
  {
    id: "faq-whatsapp",
    title: "Do you provide WhatsApp automation?",
    content: "Yes. We connect WhatsApp for lead alerts, follow-ups, and reminders."
  },
  {
    id: "faq-support",
    title: "Do you offer ongoing support?",
    content: "Ongoing optimization and support are available as monthly retainers."
  },
  {
    id: "faq-ai",
    title: "Is AI safe for business data?",
    content: "We follow data privacy best practices and only use approved, secure AI workflows."
  }
];

export default function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Clear answers before you book the audit"
          subtitle="Straight answers before you book the audit."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Accordion items={faqItems} />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Still have questions?
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Book a Free Audit</h3>
            <p className="mt-3 text-sm text-slate-600">
              Get a tailored Business Operations plan with clear next steps.
            </p>
            <div className="mt-6">
              <Button href="/contact">Book a Free Audit</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
