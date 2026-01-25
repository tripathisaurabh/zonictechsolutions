import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_NAME } from "../lib/constants";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Customers", href: "/#customers" },
  { label: "Resources", href: "/#resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <Container className="py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo_zonic-removebg-preview.png"
                alt="Zonic Tech Solutions logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <p className="text-lg font-semibold text-white">{SITE_NAME}</p>
            </div>
            <p className="text-sm text-slate-300">
              Business Operations and AI automation for teams that want predictable pipeline and faster
              conversions.
            </p>
            <p className="text-sm text-slate-400">{SITE_ADDRESS}</p>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact</p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300">{SITE_EMAIL}</p>
              <p className="text-slate-300">{SITE_PHONE_DISPLAY}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Navigation</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-300 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Legal</p>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-slate-300 hover:text-white" href={link.href} aria-disabled>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
            <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
            <span>Business Operations + AI Automation</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
