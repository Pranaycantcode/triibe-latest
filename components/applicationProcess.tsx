"use client";

import { ArrowRight } from "lucide-react";

const eligibilityRequirements = [
  "Currently enrolled undergraduate students",
  "Founders or co-founders of registered 501(c)(3) nonprofit organizations",
  "Active leadership role in organizational operations",
  "Aspiring to continue their work full-time after graduating",
];

const cohortDetails = [
  { label: "Cohort Size", value: "5 Fellows" },
  { label: "Duration", value: "3 years" },
];

const footerLinks = [
  { text: "Full eligibility requirements", href: "/eligibility" },
  { text: "Application timeline and process", href: "/application-timeline" },
];

export default function ApplicationProcess() {
  return (
    <section className="flex flex-col items-start gap-12 px-4 md:px-25 lg:px-50 py-20 w-full bg-gray-50">
      <header className="flex flex-col items-start gap-4 w-full">
        <h2 className=" font-bold text-[#000000] text-4xl tracking-[-0.90px] leading-10">
          Apply to the Fellowship
        </h2>
        <p className="max-w-191 font-normal text-[#495565] text-lg leading-[29.2px]">
          TRIIBE provides funding, mentorship, and community for college students taking root today to advance tomorrow
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Application Window Card */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className=" font-normal text-[#697282] text-xs tracking-[0.60px] leading-4 uppercase">
                APPLICATION WINDOW
              </p>
              <h3 className=" font-normal text-[#000000] text-2xl leading-8">
                Opening Soon
              </h3>
              <p className=" font-normal text-[#495565] text-base leading-[25.6px]">
                Applications for the Fall 2026 cohort will open later this
                spring.
              </p>
            </div>

            <div className="flex flex-col gap-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                {cohortDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className=" font-normal text-[#697282] text-xs leading-4">
                      {detail.label}
                    </p>
                    <p className=" font-normal text-[#000000] text-xl leading-7">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            <div className="flex flex-col gap-4 w-full">
              <a
              href="/apply"
              className="w-full md:w-auto px-6 py-3 bg-[#1C5945] hover:bg-[#003d24] text-white rounded border border-[#1C5945] transition-colors text-center font-semibold text-base"
            >
             Begin Application
              </a>

              <a
              zeffy-form-link="https://www.zeffy.com/embed/donation-form/invest-in-the-future-3?modal=true"
              className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base w-full md:w-auto text-center cursor-pointer"
              >
             Donate
             </a>
            </div> 
            </div>
          </div>
        </div>

        {/* Eligibility Card */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-10 flex flex-col gap-6">
            <p className=" font-normal text-[#697282] text-xs tracking-[0.60px] leading-4 uppercase mb-4">
              WHO CAN APPLY
            </p>

            <ul className="flex flex-col gap-4">
              {eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex gap-3">
                  <span className=" font-normal text-[#99a1ae] text-sm leading-6 shrink-0">
                    —
                  </span>
                  <span className=" font-normal text-[#354152] text-sm leading-6">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>

            {/* <div className="flex items-start justify-between gap-4 flex-wrap">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="border-b border-[#99a1ae]  font-normal text-[#101727] text-xs leading-5 hover:text-[#000000] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
