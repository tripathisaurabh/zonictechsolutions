import Container from "./ui/Container";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <Container>
      <div className={`mb-10 md:mb-14 ${alignment}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
        <p className="mt-3 text-base text-slate-600">{subtitle}</p>
      </div>
    </Container>
  );
}
