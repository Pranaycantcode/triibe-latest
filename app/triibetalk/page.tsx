"use client";

import React, { useState, useEffect, useRef } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";
import Link from "next/link";
import MediaEventsList from "@/components/mediaEventsList";
import {
  MapPin,
  Calendar,
  Clock,
  Share,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EventsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        html {
          overflow-y: scroll;
        }
      `}</style>
      <Header />

      {/* Hero Section  */}
      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div className="">
              <Image
                src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/690ec0097fad8b2d6aa19eec_Screenshot_2025-11-07_at_10.58.29_PM-removebg-preview.png"
                alt="TRIIBE TALK"
                width={600}
                height={150}
                priority
                className="w-full max-w-[400px] md:max-w-[500px] h-auto -ml-3 md:-ml-5 lg:-ml-6 object-contain object-left"
              />
              <p className="text-[#495565] text-lg mb-8 leading-relaxed mt-4 font-bold">
                Pairing established and next-gen changemakers in dialogue to
                demonstrate that age doesn’t determine the quality of one’s
                voice
              </p>
              <div className="flex w-full items-center justify-center gap-4">

              <a
              href="https://drive.google.com/file/d/1rALrh5bjpWnbKq2AvxeudYOpPG7kFsZ-/view?usp=sharing"
              className="px-8 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-medium"
              >
                TRIIBE Talk Guide
              </a>

              <a
              href="/triibetalk/host"
              className="px-8 py-3 bg-[#1C5945] text-white rounded-lg font-medium hover:bg-[#003d24] transition-colors"
              >
                Host a TRIIBE Talk
              </a>

              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-tl-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-1.jpg"
                  alt="1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-tr-4xl overflow-hidden">
                <Image
                  src="/images/events/newImg.jpg"
                  alt="2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-bl-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-2.jpg"
                  alt="3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-br-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-4.jpg"
                  alt="4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <MediaEventsList />

      <CTASection />
      <Footer />
    </main>
  );
};

export default EventsPage;
