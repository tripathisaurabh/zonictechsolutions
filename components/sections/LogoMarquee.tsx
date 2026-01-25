import Container from "../ui/Container";

const items = [
  "SaaS",
  "Fintech",
  "EdTech",
  "HealthTech",
  "PropTech",
  "B2B",
  "Startups",
  "Scaleups",
  "Enterprises",
  "Agencies",
  "Consulting",
  "Sales Ops",
  "RevOps",
  "Support Ops",
  "Field Sales"
];

export default function LogoMarquee() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <Container className="py-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold text-slate-700">Built for modern teams</p>
        </div>
        <div className="overflow-hidden">
          <div className="marquee items-center text-xs font-semibold uppercase tracking-wide text-slate-500">
            {[...items, ...items].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-3">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  {item}
                </span>
                <span className="text-slate-300">•</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
