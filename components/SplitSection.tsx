import Image from "next/image";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

type SplitSectionProps = {
  id?: string;
  reverse?: boolean;
  bgClassName?: string;
  imageSrc: string;
  imageAlt: string;
  badgeValue: string;
  badgeLabel: string;
  eyebrow: string;
  heading: string;
  paragraph: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export default function SplitSection({
  id,
  reverse = false,
  bgClassName = "",
  imageSrc,
  imageAlt,
  badgeValue,
  badgeLabel,
  eyebrow,
  heading,
  paragraph,
  features,
  ctaLabel,
  ctaHref,
}: SplitSectionProps) {
  return (
    <section
      id={id}
      className={`overflow-hidden lg:py-20 ${bgClassName}`}
    >
      <div
        className={`mx-auto grid w-full max-w-[1180px] items-center gap-16 px-4 sm:px-6 md:px-8 lg:gap-20 ${reverse ? "md:grid-cols-[1fr_0.85fr]" : "md:grid-cols-[0.85fr_1fr]"}`}
      >
        <Reveal
          direction={reverse ? "right" : "left"}
          className={reverse ? "lg:order-2" : "lg:order-1"}
        >
          <div className="relative mx-auto max-w-1/2 pb-8 lg:max-w-none lg:pb-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-none border-4 border-white shadow-soft outline outline-1 outline-gold/30 sm:border-[6px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain"
              />
            </div>

            <div className="absolute -bottom-1 left-1/2 w-[min(220px,72vw)] -translate-x-1/2 rounded bg-navy px-5 py-4 text-white shadow-badge sm:-bottom-3 sm:px-6 sm:py-5 lg:bottom-[-28px] lg:left-[-28px] lg:w-[220px] lg:translate-x-0">
              <b className="block font-display text-2xl text-gold-light">
                {badgeValue}
              </b>
              <span className="text-[0.72rem] leading-5 text-white/75 sm:text-[0.74rem]">
                {badgeLabel}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className={reverse ? "lg:order-1" : "lg:order-2"}>
          
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-[1.8rem] font-semibold leading-tight text-navy sm:text-[2.6rem]">
            {heading}
          </h2>

          <p className="mt-5 max-w-[560px] text-[0.98rem] leading-7 text-slate sm:text-[1.01rem]">
            {paragraph}
          </p>

          <ul className="mt-7 grid gap-3.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-[0.93rem] font-semibold leading-6 text-ink"
              >
                <CheckIcon className="mt-1 h-[18px] w-[18px] flex-none text-gold" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-sm bg-gold px-6 py-[14px] text-[0.84rem] font-bold tracking-wide text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-gold-light sm:px-7 sm:py-[15px]"
            >
              {ctaLabel}
            </a>

            <div className="relative w-[150px] overflow-hidden rounded-sm border border-gold px-3 py-2.5">
              <div className="animate-brokerage flex w-max whitespace-nowrap font-bold">
                <div className="flex items-center">
                  <span className="text-gold">0%</span>
                  <span className="ml-2 text-[0.68rem] tracking-[0.12em] text-navy">
                    BROKERAGE
                  </span>
                  <span className="mx-4 text-gold">•</span>
                  <span className="text-[0.68rem] tracking-[0.12em] text-navy">
                    NO COMMISSION
                  </span>
                  <span className="mx-4 text-gold">•</span>
                </div>

                <div className="flex items-center">
                  <span className="text-gold">0%</span>
                  <span className="ml-2 text-[0.68rem] tracking-[0.12em] text-navy">
                    BROKERAGE
                  </span>
                  <span className="mx-4 text-gold">•</span>
                  <span className="text-[0.68rem] tracking-[0.12em] text-navy">
                    NO COMMISSION
                  </span>
                  <span className="mx-4 text-gold">•</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
