import Button from "../ui/Button";
import Container from "../ui/Container";

type FinalCTAProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
};

export default function FinalCTA({
  title = "Get a free Business operations & AI audit",
  subtitle = "Book a 30-minute audit and get a clear Business operations roadmap.",
  buttonLabel = "Book Free Audit"
}: FinalCTAProps) {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 p-10 text-white shadow-sm">
          <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"></div>
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
              <p className="mt-3 text-sm text-indigo-100">{subtitle}</p>
            </div>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/60 bg-transparent text-white hover:bg-white hover:text-indigo-700"
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
