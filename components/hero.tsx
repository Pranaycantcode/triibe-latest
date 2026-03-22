"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="pt-16 ">
      <section className="relative w-full min-h-150 md:min-h-175 lg:min-h-200 bg-[#101828] flex items-center justify-center ">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full ">
          <Image
            src="/images/home/heroImage.png"
            alt="College students collaborating"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 w-full h-full bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center  px-6   max-w-225 mx-auto ">
          {/* Heading */}
          <div className="flex flex-col items-center mt-24 pb-3 ">
            <h1 className="font-['DM_Sans',Helvetica] font-bold text-white text-4xl md:text-4xl lg:text-[64px] text-center tracking-tight leading-tight max-w-200">
              Funding Next-Gen
              <br />
              Nonprofit Founders
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center pb-6">
            <p className="font-['DM_Sans',Helvetica]font-normal text-white/90 text-base md:text-lg text-center tracking-[0] leading-relaxed max-w-125 ">
              Funding, mentorship, and community for changemakers taking root
              today to advance tomorrow
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="  flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-12   ">
            <a
              href="/program"
              className="px-6 py-3 font-bold bg-white text-black hover:bg-gray-100 font-['DM_Sans',Helvetica] font-normal text-sm rounded inline-flex items-center justify-center transition-colors"
            >
              Explore our Program
            </a>

            <a
              href="/apply"
              className="px-6 py-3  font-bold bg-[#002c19] text-white rounded hover:bg-[#003d24] font-['DM_Sans',Helvetica] font-normal text-sm rounded inline-flex items-center justify-center transition-colors gap-2"
            >
              Apply to Fellowship
            </a>
          </div>
          <div className="mt-20">
            <Image
              src="/images/home/TRIIBEHeroWhite.svg"
              alt="TRIIBE"
              width={40}
              height={40}
              priority
              className="h-20 w-80"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
