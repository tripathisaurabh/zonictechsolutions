import Container from "../ui/Container";
import Card from "../ui/Card";

const problems = [
  "Missed lead follow-ups",
  "Manual CRM work",
  "No visibility for founders",
  "CRM used as data storage only"
];

const solutions = [
  "Automated routing + SLA",
  "Smart follow-ups",
  "Real-time dashboards",
  "AI summaries and insights"
];

export default function ProblemSolution() {
  return (
    <section className="section bg-slate-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h2 className="section-title">Common CRM Problems</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-600"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="section-title">Our Solutions</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-600"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
