import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="section hero-gradient relative overflow-hidden" id="product">
      <div className="blob left-10 top-10 h-56 w-56 bg-indigo-400/40"></div>
      <div className="blob delay right-10 top-24 h-72 w-72 bg-purple-400/40"></div>
      <div className="blob delay-2 bottom-10 left-1/3 h-64 w-64 bg-indigo-300/40"></div>

      <Container className="relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Business Operations + AI Services
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Business Operations + AI Automation for Growing Teams
          </h1>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Build a predictable, high-converting CRM engine with automation and AI insights that reduce
            manual work and accelerate revenue.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Book Free Audit</Button>
            <Button href="#solutions" variant="outline">
              See How It Works
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-sm text-slate-600">
              Trusted by teams in Sales, Ops & Support
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["SaaS", "B2B Services", "Fintech", "EdTech"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="card relative z-10 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-indigo-600">Operations Command Center</p>
                <p className="mt-2 text-sm text-slate-600">
                  Real-time visibility into CRM performance
                </p>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                Live
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900">Lead Response SLA</span>
                  <span className="text-indigo-600">92%</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                  <div className="h-2 w-[92%] rounded-full bg-indigo-500"></div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Hot Leads Today</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center justify-between">
                    <span>Cloud Metrics</span>
                    <span className="text-emerald-600">+18%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Rocket Ops</span>
                    <span className="text-emerald-600">+12%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>NovaCare</span>
                    <span className="text-emerald-600">+9%</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">AI Summary</p>
                <p className="mt-3 text-sm text-slate-600">
                  Lead quality improved after new routing rules. Ops team saving ~6 hours per week by
                  eliminating manual updates.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </Container>
    </section>
  );
}
