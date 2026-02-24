"use client";

import { useEffect } from "react";

export default function CTASectionContact() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const zeffyModal = document.querySelector(
        'iframe[src*="zeffy.com"]',
      ) as HTMLIFrameElement | null;

      if (zeffyModal && zeffyModal.offsetParent !== null) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    /* Outer padding:
       - Mobile: px-6
       - Tablet: px-16
       - Desktop: px-[200px]
    */
    <section className="py-20 px-6 md:px-16 xl:px-[200px] bg-[#002c19]">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 xl:gap-12 ">
          {/* Be a Cohort */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl">Join A Cohort</h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed">
              Are you an undergraduate nonprofit founder? Apply to join our
              community of changemakers.
            </p>
            <a
              href="/apply"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center"
            >
              Apply
            </a>
          </div>

          {/* Contact Us */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl">Get Involved</h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed">
              Partner with TRIIBE to empower the next generation of nonprofit
              leaders.
            </p>
            <a
              href="mailto:partnerships@triibe.org"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Give */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl">Fund Our Work</h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed">
              Your donation helps founders make an impact in food, water,
              shelter, health and education.
            </p>
            <button
              zeffy-form-link="https://www.zeffy.com/embed/donation-form/invest-in-the-future-3?modal=true"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center cursor-pointer"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
