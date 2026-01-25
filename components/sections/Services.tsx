import Image from "next/image";
import Container from "../ui/Container";
import Card from "../ui/Card";

const services = [
  {
    title: "Business Operations Design",
    description: "Lead routing, SLAs, pipeline stages, and owner accountability built into your CRM.",
    icon: "/icons/operations.svg"
  },
  {
    title: "AI Automation Layer",
    description: "AI summaries, smart lead scoring, and automated actions that reduce manual work.",
    icon: "/icons/ai.svg"
  },
  {
    title: "Integrations",
    description: "Connect WhatsApp, email, ads, payments, and support tools for a unified workflow.",
    icon: "/icons/integrations.svg"
  },
  {
    title: "Analytics & Reporting",
    description: "Real-time dashboards for founders, sales teams, and marketing leaders.",
    icon: "/icons/analytics.svg"
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-slate-50">
      <Container>
        <div className="mb-10">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mt-2">
            Business Operations and AI automation focused on revenue growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
