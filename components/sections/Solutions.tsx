import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const solutions = [
  {
    title: "Business Operations Design",
    description: "Pipeline architecture, SLAs, and ownership models aligned directly to revenue goals.",
    includes: ["Lifecycle stages", "Role ownership", "SLA rules"],
    icon: "O"
  },
  {
    title: "AI Automation Layer",
    description: "AI summaries, lead scoring, and intelligent actions that keep teams aligned and proactive.",
    includes: ["AI summaries", "Lead scoring", "Auto tasks"],
    icon: "AI"
  },
  {
    title: "Integrations",
    description: "WhatsApp, email, ads, and payments connected into a single workflow.",
    includes: ["WhatsApp sync", "Ad lead capture", "Payment events"],
    icon: "I"
  },
  {
    title: "Analytics & Reporting",
    description: "Always-on dashboards that give founders, sales, and marketing teams shared visibility.",
    includes: ["Live KPIs", "Team scorecards", "Forecast reports"],
    icon: "R"
  }
];

export default function Solutions() {
  return (
    <section className="bg-white py-20 md:py-28" id="resources">
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Everything you need to run Business Operations at scale"
          subtitle="Modular services built to lift conversion rates and reduce CRM friction."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <Card
                key={solution.title}
                className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <span className="text-xs font-semibold">{solution.icon}</span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                    Feature
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{solution.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{solution.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {solution.includes.map((include) => (
                    <li key={include} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      {include}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="card relative p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Workflow Studio
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  Visual lead journey orchestration
                </h3>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                Draft
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Trigger</p>
                <p className="mt-2 text-sm text-slate-600">New lead captured from ads or website.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Actions</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>Assign owner by region + SLA</li>
                  <li>Send WhatsApp intro message</li>
                  <li>Create AI summary for SDR</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Outcome</p>
                <p className="mt-2 text-sm text-slate-600">Lead reaches demo booking in under 24 hrs.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
