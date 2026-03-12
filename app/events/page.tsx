"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
            <div>
              <h1 className="font-bold text-black text-4xl md:text-5xl mb-6 leading-tight">
                Connecting Youth Leaders with the Resources to Scale Impact
              </h1>
              <p className="text-[#495565] text-lg mb-8 leading-relaxed">
                TRIIBE hosts convening experiences that bring together youth
                nonprofit founders, mentors, and partners to build connections.
              </p>
              <div className="flex">
                <a
                  href="#updates"
                  className="px-8 py-3 bg-[#1C5945] text-white rounded-lg font-medium"
                >
                  Get Updates
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

      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-300 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-black">Event Calendar</h2>
          <iframe
            src="https://luma.com/embed/calendar/cal-7Eel9YxQnoBh2PA/events"
            width="100%" // Change to 100% to fill your container
            height="800" // Increase height so it doesn't scroll inside itself
            frameBorder="0"
            style={{ border: "1px solid #E5E7EB", borderRadius: "12px" }} // Match your card rounding
            allowFullScreen
          />
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default EventsPage;
