import Container from "../ui/Container";

const tags = [
  "Business Operations",
  "AI Automation",
  "Integrations",
  "Analytics",
  "Support"
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <Container className="flex flex-wrap items-center justify-center gap-3 py-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold text-slate-600"
          >
            {tag}
          </span>
        ))}
      </Container>
    </section>
  );
}
