"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#zespol", label: "Zespół" },
  { href: "#projekty", label: "Projekty" },
  { href: "#partnerzy", label: "Sponsorzy" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Główna nawigacja"
      className="relative z-20 flex items-center justify-between gap-6"
    >
      <a href="#top" aria-label="PWr in Space — początek strony">
        <Image
          src="/images/pwr-in-space-logo.svg"
          alt="PWr in Space"
          width={155}
          height={56}
          priority
          className="h-[clamp(2.84rem,2.6rem+1vw,3.5rem)] w-auto"
        />
      </a>

      <ul className="hidden items-start gap-[clamp(1.25rem,2.5vw,2.25rem)] leading-[1.35] lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-muted-foreground">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground hidden text-sm leading-[1.35] lg:block">
        PL / EN
      </p>

      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => {
          setOpen((value) => !value);
        }}
        className="leading-[1.35] lg:hidden"
      >
        {open ? "Zamknij" : "Menu"}
      </button>

      {open ? (
        <ul
          id="mobile-menu"
          className="border-border absolute top-full right-0 left-0 mt-6 flex max-h-[calc(100svh-8rem)] flex-col gap-5 overflow-y-auto border bg-black/95 p-6 text-xl lg:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="text-muted-foreground text-sm">PL / EN</li>
        </ul>
      ) : null}
    </nav>
  );
}
