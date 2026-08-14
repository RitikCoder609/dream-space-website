"use client";

import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ZeroCommission() {
  return (
<section
  id="commission"
  className="scroll-mt-14 overflow-hidden bg-ivory py-20 sm:py-24 md:py-28"
>      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-gold/25 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12 md:px-14">
            
            {/* Top Heading */}
            <div className="max-w-3xl">
              <p className="eyebrow">Our Zero Buyer Commission Policy</p>

              <h2 className="mt-4 font-display text-[1.8rem] font-semibold leading-tight text-navy sm:text-[2.5rem]">
                Zero Commission
              </h2>

              <p className="mt-5 text-[0.95rem] leading-7 text-slate sm:text-[1rem]">
                For eligible new-flat transactions, Dream Space does not
                charge brokerage or commission from the buyer. We believe
                customers should be able to explore and purchase their
                property without the additional burden of buyer-side
                brokerage.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-2 border border-gold/20 bg-white px-2 py-4">
                <CheckIcon className="h-5 w-5 text-gold" />
                <p className=" text-sm font-semibold text-navy">
                  No Buyer Brokerage
                </p>
              </div>

              <div className="flex items-center gap-2 border border-gold/20 bg-white px-2 py-4">
                <CheckIcon className="h-5 w-5 text-gold" />
                <p className=" text-sm font-semibold text-navy">
                  Transparent Communication
                </p>
              </div>

             <div className="flex items-center gap-2 border border-gold/20 bg-white px-2 py-4">
                <CheckIcon className="h-5 w-5 text-gold" />
                <p className=" text-sm font-semibold text-navy">
                  Professional Assistance
                </p>
              </div>

             <div className="flex items-center gap-2 border border-gold/20 bg-white px-2 py-4">
                <CheckIcon className="h-5 w-5 text-gold" />
                <p className=" text-sm font-semibold text-navy">
                  Customer-Centric Service
                </p>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-9 flex flex-col gap-4 border-t border-gold/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-navy">
                  Your Property Search. Our Professional Support.
                </p>

                <p className="mt-1 text-sm text-slate">
                  Zero Buyer Commission on eligible new-flat deals.
                </p>
              </div>

              <div className="shrink-0 rounded-sm border border-gold bg-white px-5 py-3 text-center">
                <span className="block font-display text-2xl font-bold leading-none text-gold">
                  0%
                </span>

                <span className="mt-1 block text-[0.65rem] font-bold tracking-[0.14em] text-navy">
                  BUYER COMMISSION
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-[0.68rem] leading-5 text-slate/100">
              Applicable to eligible new-flat deals and subject to the terms
              of the respective project/transaction.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}