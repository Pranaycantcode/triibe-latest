"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";

const GALLERY_SECTIONS = [
  {
    title: "World Economic Forum 2026",
    images: [
      {
        src: "/images/photogallery/WEF1.png",
        alt: "WEF 1",
        gridClass: "md:col-span-2",
      }, // 1fr
      {
        src: "/images/photogallery/WEF2.png",
        alt: "WEF 2",
        gridClass: "md:col-span-5",
      }, // 2fr
      {
        src: "/images/photogallery/WEF3.png",
        alt: "WEF 3",
        gridClass: "md:col-span-5",
      }, // 1fr
    ],
  },
  {
    title: "Changemakers Summit 2025",
    images: [
      {
        src: "/images/photogallery/ChangemakersSummit11.png",
        alt: "Summit 1",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit12.png",
        alt: "Summit 2",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit13.png",
        alt: "Summit 3",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit14.png",
        alt: "Summit 4",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit15.png",
        alt: "Summit 5",
        gridClass: "md:col-span-4",
      },
      {
        src: "/images/photogallery/ChangemakersSummit21.png",
        alt: "Summit 6",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit22.png",
        alt: "Summit 7",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit23.png",
        alt: "Summit 8",
        gridClass: "md:col-span-4",
      },
      {
        src: "/images/photogallery/ChangemakersSummit24.png",
        alt: "Summit 9",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit25.png",
        alt: "Summit 9",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/ChangemakersSummit31.png",
        alt: "Summit 9",
        gridClass: "md:col-span-3",
      },
      {
        src: "/images/photogallery/ChangemakersSummit32.png",
        alt: "Summit 9",
        gridClass: "md:col-span-4",
      },
      {
        src: "/images/photogallery/ChangemakersSummit33.png",
        alt: "Summit 9",
        gridClass: "md:col-span-3",
      },
    ],
  },
  {
    title: "Team Dinner 2025",
    images: [
      {
        src: "/images/photogallery/TeamDinner1.png",
        alt: "Dinner 1",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/TeamDinner2.png",
        alt: "Dinner 2",
        gridClass: "md:col-span-4",
      },
      {
        src: "/images/photogallery/TeamDinner3.png",
        alt: "Dinner 3",
        gridClass: "md:col-span-2",
      },
      {
        src: "/images/photogallery/TeamDinner4.png",
        alt: "Dinner 4",
        gridClass: "md:col-span-4",
      },
    ],
  },

  {
    title: "Binky 🐶",
    images: [
      {
        src: "/images/photogallery/Binky1.png",
        alt: "Dinner 1",
        gridClass: "md:col-span-3",
      },
      {
        src: "/images/photogallery/Binky2.png",
        alt: "Dinner 2",
        gridClass: "md:col-span-3",
      },
      {
        src: "/images/photogallery/Binky3.png",
        alt: "Dinner 3",
        gridClass: "md:col-span-4",
      },
    ],
  },
];

const PhotoGallery = () => {
  return (
    <main className="bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-50">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Title */}
          <h1 className="font-bold text-black text-5xl md:text-6xl mb-12">
            Photo Gallery
          </h1>

          {GALLERY_SECTIONS.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-16">
              {/* Section Sub-header */}
              <div className="mb-6">
                <p className="text-[#495565] font-medium text-lg">
                  {section.title}
                </p>
              </div>

              {/* Modular 12-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {section.images.length > 0 ? (
                  section.images.map((image, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={`relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-50 ${image.gridClass}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-12 py-12 border border-dashed border-gray-200 rounded-2xl text-center">
                    <p className="text-gray-400">
                      No photos available for this section yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default PhotoGallery;
