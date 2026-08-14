"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#properties", label: "Inventory" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] w-full max-w-full bg-white transition-[padding,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/95 py-3 shadow-[0_8px_24px_rgba(0,10,30,0.25)] backdrop-blur-sm"
          : "py-4 md:py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] min-w-0 items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <Image
            src="/images/navicon.jpg"
            alt="Dream Space logo"
            width={60}
            height={60}
            priority
            className={`h-[50px] w-[50px] shrink-0 rounded-full bg-white p-0.5 transition-transform duration-300 hover:scale-105 sm:h-[55px] sm:w-[55px] ${
              scrolled ? "md:h-[55px] md:w-[55px]" : "md:h-[60px] md:w-[60px]"
            }`}
          />

          <div className="min-w-0 font-display leading-tight">
            <strong className="block truncate text-[1.15rem] font-semibold tracking-tight text-navy sm:text-[1.45rem] xl:text-[2.1rem]">
              Dream Space
            </strong>
            <span className="block truncate font-sans text-[0.43rem] font-bold uppercase tracking-[0.12em] text-gold-light sm:text-[0.52rem] sm:tracking-[0.2em] xl:text-[0.72rem]">
              Infra Developers (OPC) Pvt Ltd
            </span>
          </div>
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[210] flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-md md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45 bg-white" : "bg-black"
            }`}
          />
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${
              open ? "opacity-0" : "bg-black"
            }`}
          />
          <span
            className={`h-[2px] w-6 transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45 bg-white" : "bg-black"
            }`}
          />
        </button>

        {/* Mobile drawer */}
        <div
          aria-hidden={!open}
          className={`fixed right-0 top-0 z-[150] h-[100dvh] w-[min(82vw,320px)] max-w-[320px] flex-col items-start gap-7 overflow-y-auto bg-navy-deep px-8 pb-10 pt-24 shadow-[-15px_0_40px_rgba(0,0,0,0.2)] transition-transform duration-300 md:static md:flex md:h-auto md:w-auto md:max-w-none md:flex-row md:items-center md:gap-9 md:overflow-visible md:bg-transparent md:p-0 md:shadow-none ${
            open
              ? "flex translate-x-0"
              : "flex translate-x-[105%] md:translate-x-0"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              className="relative shrink-0 py-1 text-base font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full md:text-[0.95rem] md:text-black"
            >
              {item.label}
            </a>
          ))}

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            className="flex shrink-0 items-center gap-2 rounded-sm bg-gold px-5 py-[11px] text-[0.82rem] font-bold text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-gold-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          aria-hidden={!open}
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
          className={`fixed inset-0 z-[140] bg-black/35 transition-opacity duration-300 md:hidden ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        />
      </div>
    </header>
  );
}
