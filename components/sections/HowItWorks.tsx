import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    title: "Audit",
    description: "Review CRM setup, lead flow, and conversion blockers."
  },
  {
    title: "Blueprint",
    description: "Design the operations system, stages, and automations."
  },
  {
    title: "Build",
    description: "Implement integrations, AI rules, and reporting."
  },
  {
    title: "Optimize",
    description: "Refine performance with weekly reviews and support."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 md:py-28" id="customers">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="A proven path to predictable CRM performance"
          subtitle="Four steps to launch a scalable Business Operations engine."
        />
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block"></div>
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="h-px flex-1 bg-slate-200 md:hidden"></span>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
