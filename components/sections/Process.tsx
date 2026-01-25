import Container from "../ui/Container";
import Card from "../ui/Card";

const steps = [
  {
    title: "Audit",
    description: "Understand your current CRM, lead flow, and conversion blockers."
  },
  {
    title: "Blueprint",
    description: "Design the Business Operations model, data structure, and automation plan."
  },
  {
    title: "Build",
    description: "Implement workflows, integrations, and AI automation quickly."
  },
  {
    title: "Optimize",
    description: "Measure outcomes and improve performance with ongoing support."
  }
];

export default function Process() {
  return (
    <section id="process" className="section bg-slate-50">
      <Container>
        <div className="mb-10">
          <h2 className="section-title">Process</h2>
          <p className="section-subtitle mt-2">A simple, proven path to better Business Operations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
