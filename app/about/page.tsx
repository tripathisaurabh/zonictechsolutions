import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import FinalCTA from "../../components/sections/FinalCTA";
import { buildCanonical } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "About Zonic Tech Solutions | Business operations & AI Automation",
  description:
    "Learn how Zonic Tech Solutions helps teams run scalable Business operations with automation and AI to improve conversion, clarity, and execution.",
  alternates: {
    canonical: buildCanonical("/about")
  },
  openGraph: {
    title: "About Zonic Tech Solutions | Business operations & AI Automation",
    description:
      "Learn how Zonic Tech Solutions helps teams run scalable Business operations with automation and AI to improve conversion, clarity, and execution.",
    url: `${SITE_URL}/about`
  },
  twitter: {
    title: "About Zonic Tech Solutions | Business operations & AI Automation",
    description:
      "Learn how Zonic Tech Solutions helps teams run scalable Business operations with automation and AI to improve conversion, clarity, and execution."
  }
};

const philosophyItems = [
  {
    title: "Enforces discipline without slowing teams down",
    description: "Clear ownership, SLAs, and routing rules that keep momentum high."
  },
  {
    title: "Guides people on what to do next",
    description: "Every stage has defined actions, handoffs, and follow-ups."
  },
  {
    title: "Surfaces insights instead of hiding data",
    description: "Dashboards and AI summaries deliver clarity, not noise."
  },
  {
    title: "Scales with the business",
    description: "Operations grow with new teams, regions, and channels."
  }
];

const differentiators = [
  "Operations-first, not feature-first",
  "Built for sales, ops, and founders",
  "Automation with intent",
  "Practical AI, not hype",
  "Systems that evolve over time"
];

const services = [
  "Business operations architecture & governance",
  "Lead routing, SLAs, lifecycle design",
  "WhatsApp, email, ads, payment integrations",
  "AI summaries, lead scoring, auto-actions",
  "Dashboards for founders and teams",
  "Ongoing optimization & support"
];

const industries = [
  "B2B service companies",
  "SaaS and tech teams",
  "Fintech and EdTech",
  "Sales-driven organizations",
  "Growing teams scaling beyond spreadsheets"
];

const steps = [
  {
    title: "Audit",
    description: "Review CRM setup and operational blockers."
  },
  {
    title: "Design",
    description: "Map operations, automation, and AI workflows."
  },
  {
    title: "Build",
    description: "Implement CRM workflows and integrations."
  },
  {
    title: "Optimize",
    description: "Continuous improvement and support."
  }
];

const promises = [
  "Clear ownership and accountability",
  "Faster lead response times",
  "Reduced manual CRM work",
  "Better leadership visibility",
  "A CRM system teams actually trust"
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <Container className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            ABOUT ZONIC TECH SOLUTIONS
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            We help teams run Business operations that actually drive revenue
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
            Zonic Tech Solutions designs CRM systems powered by automation and AI—so sales, operations,
            and leadership teams can move faster with clarity and control.
          </p>
          <div className="mt-8">
            <Button href="/contact">Book Free Audit</Button>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="WHO WE ARE"
            title="Business operations specialists, not just implementers"
            subtitle="We focus on operational clarity that makes CRM adoption stick."
          />
          <div className="grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <p>
              Most CRM failures happen because operations were never designed. Leads fall through cracks,
              follow-ups break, and data becomes unreliable.
            </p>
            <p>
              Zonic Tech Solutions fixes the operating system behind the CRM by combining disciplined
              CRM ops with automation and AI—so teams execute consistently.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="OUR PHILOSOPHY"
            title="CRM is not software. It’s an operating system."
            subtitle="We build CRMs that drive behavior, not just store data."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {philosophyItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="WHY ZONIC"
            title="Built for real teams and real operations"
            subtitle="Operator-first systems that scale with accountability and visibility."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="End-to-end Business operations and AI automation"
            subtitle="Systems that remove bottlenecks and accelerate revenue execution."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="WHO WE WORK WITH"
            title="Teams that care about execution and outcomes"
            subtitle="If CRM performance impacts revenue, we’re a strong fit."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            If CRM performance impacts revenue, we’re a strong fit.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="OUR APPROACH"
            title="A simple, repeatable way to improve CRM performance"
            subtitle="Each step builds operational clarity and measurable progress."
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
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="OUR PROMISE"
            title="What you can expect when working with us"
            subtitle="Outcome-focused Business operations with measurable impact."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {promises.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready to fix your Business operations?"
        subtitle="Book a free CRM + AI audit and get a clear, actionable roadmap tailored to your business."
        buttonLabel="Book Free Audit"
      />
    </>
  );
}
