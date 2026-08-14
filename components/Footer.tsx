import Image from "next/image";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon,
} from "./Icons";

const exploreLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Dream Space" },
  { href: "#properties", label: "Featured Listing" },
  { href: site.whatsapp, label: "WhatsApp Us", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-deep pt-20 text-white/80 sm:pt-24">
      <div className="-mt-px w-full leading-none">
        <svg
          viewBox="0 0 1440 60"
          width="100%"
          height="60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C360,55 1080,55 1440,0 L1440,60 L0,60 Z"
            fill="#010F2B"
          />
          <path
            d="M0,4 C360,58 1080,58 1440,4"
            fill="none"
            stroke="#C89238"
            strokeWidth={2}
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 md:px-8">
        <div className="grid gap-10 pb-12 sm:gap-12 sm:pb-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-start gap-3 sm:gap-4">
              <Image
                src="/images/navicon.jpg"
                alt="Dream Space logo"
                width={58}
                height={58}
                className="h-14 w-14 shrink-0 rounded-full bg-white p-0.5 sm:h-[58px] sm:w-[58px]"
              />

              <div className="min-w-0">
                <h3 className="font-display text-xl text-white sm:text-2xl xl:text-[32px]">
                  Dream Space
                </h3>
                <p className="mt-2.5 max-w-[240px] text-sm leading-6 text-white/80">
                  Infra Developers (OPC) Pvt Ltd — turning dreams into reality.
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-all hover:border-gold hover:bg-gold hover:text-navy-deep"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>

              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-all hover:border-gold hover:bg-gold hover:text-navy-deep"
              >
                <YoutubeIcon className="h-[18px] w-[18px]" />
              </a>

              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-all hover:border-gold hover:bg-gold hover:text-navy-deep"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[0.75rem] font-bold uppercase tracking-[0.16em] text-gold-light">
              Visit Us
            </h4>

            <ul className="space-y-3.5">
              <li>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm leading-6 text-white/80 transition-colors hover:text-gold-light"
                >
                  <PinIcon className="mt-1 h-[17px] w-[17px] flex-none text-gold" />
                  <span>{site.address}</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-start gap-2.5 text-sm text-white/80 transition-colors hover:text-gold-light"
                >
                  <PhoneIcon className="mt-1 h-[17px] w-[17px] flex-none text-gold" />
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-sans text-[0.75rem] font-bold uppercase tracking-[0.16em] text-gold-light">
              Explore
            </h4>

            <ul className="space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-2.5 text-sm text-white/80 transition-colors hover:text-gold-light"
                  >
                    <ArrowRightIcon className="mt-1 h-[17px] w-[17px] flex-none text-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-[0.78rem] text-white/55 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2.5 sm:text-[0.8rem]">
          <span>
            &copy; {year} {site.legalName}. All rights reserved.
          </span>
          <span>Patna, Bihar — 800014</span>
        </div>
      </div>
    </footer>
  );
}
