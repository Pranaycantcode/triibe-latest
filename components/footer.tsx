"use client";

const footerColumns = [
  {
    title: "For Applicants",
    links: [
      { label: "Apply Now", href: "/apply" },
      { label: "Fellowship Details", href: "/program" },
      { label: "FAQ", href: "/program/#faqProgram" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Team", href: "/about" },
      { label: "Fellows", href: "/cohort" },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        label: "Donate",
        href: "#",
        zeffyFormLink:
          "https://www.zeffy.com/embed/donation-form/invest-in-the-future-3?modal=true",
      },

      { label: "Contact", href: "mailto:partnerships@triibe.org" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-start pt-16 pb-0 px-4 md:px-50 relative w-full bg-white border-t border-gray-200">
      <div className="flex flex-col items-start gap-12 relative w-full max-w-260 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
          <div className="flex flex-col items-start gap-4">
            <h2 className=" font-normal text-black text-xl tracking-[0.50px] leading-7">
              TRIIBE
            </h2>
            <p className=" font-normal text-[#495565] text-sm tracking-[0] leading-[22.8px]">
              Helping next-gen nonprofit founders continue their work
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <h3 className=" font-semibold text-black text-sm tracking-[0] leading-5">
                {column.title}
              </h3>
              <nav className="flex flex-col items-start gap-2">
                {column.links.map((link, linkIndex) =>
                  link.zeffyFormLink ? (
                    <button
                      key={linkIndex}
                      zeffy-form-link={link.zeffyFormLink}
                      className="font-normal text-[#495565] text-sm hover:text-black transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className=" font-normal text-[#495565] text-sm tracking-[0] leading-5 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  ),
                )}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-gray-200 pt-4 pb-4 gap-4">
          <p className=" font-normal text-[#697282] text-sm tracking-[0] leading-5">
            © 2026 TRIIBE 501(c)(3). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:partnerships@triibe.org"
              className="text-[#697282] hover:text-black transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/thetriibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#697282] hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 3h15A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3zM8 11v6M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/triibe_us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#697282] hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/triibe.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#697282] hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11.37a4 4 0 11-7.914 1.174A4 4 0 0116 11.37zM17.5 6.75h.01"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
