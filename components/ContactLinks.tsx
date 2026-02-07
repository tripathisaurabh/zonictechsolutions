"use client";

import Card from "./ui/Card";

type ContactLink = {
  title: string;
  detail: string;
  href: string;
};

type ContactLinksProps = {
  options: ContactLink[];
};

export default function ContactLinks({ options }: ContactLinksProps) {
  const handleConversion = () => {
    if (typeof window === "undefined") return;
    window.gtag_report_conversion?.();
  };

  return (
    <>
      {options.map((option) => (
        <Card key={option.title}>
          <p className="text-sm font-semibold text-slate-900">{option.title}</p>
          <a
            className="mt-2 inline-block text-sm text-indigo-600"
            href={option.href}
            target={option.title === "WhatsApp" ? "_blank" : undefined}
            rel={option.title === "WhatsApp" ? "noopener noreferrer" : undefined}
            onClick={handleConversion}
          >
            {option.detail}
          </a>
        </Card>
      ))}
    </>
  );
}
