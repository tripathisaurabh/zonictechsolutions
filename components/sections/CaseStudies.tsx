import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const caseStudies = [
  {
    title: "Fintech Sales Ops",
    before: "Leads were routed manually with inconsistent follow-ups.",
    built: "Auto-routing, SLA timers, and AI summaries for SDRs.",
    results: ["62% faster follow-ups", "2.1x pipeline velocity", "18% higher win rate"]
  },
  {
    title: "B2B Services",
    before: "WhatsApp and email follow-ups were fragmented across teams.",
    built: "Unified CRM workflows with WhatsApp automation and dashboards.",
    results: ["38% more demos", "19% higher win rate", "30% less manual work"]
  }
];

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <Container>
        <SectionHeader
          eyebrow="Customer proof"
          title="Measured improvements in speed and conversion"
          subtitle="See how Business Operations teams unlock measurable results."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <span className="text-xs font-semibold">CS</span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                    Case study
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{study.title}</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Before:</span> {study.before}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">What we built:</span> {study.built}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.results.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                  Snapshot
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Pipeline velocity</span>
                    <span className="text-emerald-600">+2.1x</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div className="h-2 w-[78%] rounded-full bg-indigo-500"></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">SLA compliance</span>
                    <span className="text-indigo-600">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div className="h-2 w-[92%] rounded-full bg-indigo-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
