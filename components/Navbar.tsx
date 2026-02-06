"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navItems = [
  { label: "Product", href: "/#product" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Customers", href: "/#customers" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[rgba(1,10,52,1)] text-slate-200">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <Image
            src="/logo_zonic-removebg-preview.png"
            alt="Zonic Tech Solutions logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span>Zonic Tech Solutions</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact#book-demo">Book a Consultation</Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggleMenu}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <div
          className={`fixed inset-0 z-40 bg-slate-900/60 transition-opacity duration-200 md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden
        />

        <div
          ref={panelRef}
          className={`absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-sm transition-all duration-200 md:hidden ${
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "pointer-events-none opacity-0 -translate-y-2 scale-[0.98]"
          }`}
        >
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-2 py-2 hover:bg-slate-900 hover:text-white active:scale-[0.98]"
                style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact#book-demo" className="mt-2 w-full active:scale-[0.98]" onClick={closeMenu}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
