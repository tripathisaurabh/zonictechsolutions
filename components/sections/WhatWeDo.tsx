import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const items = [
  {
    title: "Automate",
    description: "Remove repetitive CRM work with SLA rules, auto-routing, and AI-driven follow-ups.",
    includes: ["SLA automation", "Routing rules", "Follow-up triggers"]
  },
  {
    title: "Integrate",
    description: "Connect WhatsApp, email, ads, and payments into one unified CRM flow.",
    includes: ["WhatsApp sync", "Ad lead capture", "Payment events"]
  },
  {
    title: "Optimize",
    description: "Measure, refine, and scale with dashboards and weekly optimization sprints.",
    includes: ["Live dashboards", "Weekly reviews", "Conversion lift"]
  }
];

export default function WhatWeDo() {
  return (
    <section className="bg-slate-50 py-20 md:py-28" id="solutions">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Business Operations designed for revenue acceleration"
          subtitle="Automate, integrate, and optimize every step of the lead lifecycle."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <span className="text-sm font-semibold">A</span>
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {item.includes.map((include) => (
                  <li key={include} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                    {include}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
