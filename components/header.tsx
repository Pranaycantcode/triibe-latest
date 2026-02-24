"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className=" fixed top-0 left-0 right-0  z-50 w-full max-w-[100vw] overflow-hidden bg-[#002c19] border-b border-[#002c19]">
      <nav className="flex h-16 items-center justify-between w-full px-4 md:px-50 ">
        {/* Logo */}
        <div className=" font-normal text-[#ffffff] text-xl tracking-[0.50px] leading-7">
          <a href="/">
            <Image
              src="/images/home/header1.png"
              alt="TRIIBE"
              width={50}
              height={50}
              priority
              className=" w-auto "
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Program", href: "/program" },
            { name: "Events", href: "/events" },
            { name: "Media", href: "/media" },
            { name: "About Us", href: "/about" },
            // { name: "Contact Us", href: "/contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={` ${
                isActive(link.href)
                  ? "font-bold  text-white "
                  : "font-normal text-white/80"
              } text-[#fffefecc] text-sm tracking-[0] leading-5 cursor-pointer hover:text-white transition-colors`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            zeffy-form-link="https://www.zeffy.com/embed/donation-form/invest-in-the-future-3?modal=true"
            className="h-9 px-4 py-2  bg-white  font-normal text-black text-sm text-center rounded hover:bg-gray-100 transition-colors inline-flex items-center cursor-pointer"
          >
            Donate
          </button>
          <a
            href="/apply"
            className="h-9 px-4 py-2 bg-[#ffffff]  font-normal text-black text-sm text-center tracking-[0] leading-5 hover:bg-[#f0f0f0] transition-colors rounded inline-flex items-center"
          >
            Apply
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden relative ">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden px-4 py-4 bg-[#002c19] ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-1">
          {[
            { name: "Home", href: "/" },
            { name: "Program", href: "/program" },
            { name: "Events", href: "/events" },
            { name: "Media", href: "/media" },
            { name: "About Us", href: "/about" },
            // { name: "Contact Us", href: "/contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg text-base transition-colors ${
                isActive(link.href)
                  ? "bg-white/10 text-white font-semibold"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-white/20">
            <button
              zeffy-form-link="https://www.zeffy.com/embed/donation-form/invest-in-the-future-3?modal=true"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Donate
            </button>
            <a
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-center text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
