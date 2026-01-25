import Container from "../ui/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Their Business Operations plan gave our team instant clarity on follow-ups and pipeline hygiene.",
    name: "Priya S.",
    role: "Head of Sales",
    company: "Cloudridge"
  },
  {
    quote:
      "We finally have real-time dashboards and AI summaries that leadership actually uses.",
    name: "Marcus L.",
    role: "Founder",
    company: "Northwind"
  },
  {
    quote:
      "Integrations and automations removed hours of manual work each week.",
    name: "Anita R.",
    role: "Operations Lead",
    company: "Brightlane"
  }
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Teams trust Zonic Tech Solutions to run Business Operations"
          subtitle="Trusted partnerships that deliver consistent CRM performance."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <span className="text-xs font-semibold">★</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Highlight
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">"{testimonials[0].quote}"</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">{testimonials[0].name}</p>
              <p className="text-xs text-slate-500">
                {testimonials[0].role} · {testimonials[0].company}
              </p>
            </div>
          </Card>
          <div className="grid gap-6">
            {testimonials.slice(1).map((item) => (
              <Card
                key={item.name}
                className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <span className="text-xs font-semibold">TS</span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                    Testimonial
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600">"{item.quote}"</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">
                    {item.role} · {item.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
