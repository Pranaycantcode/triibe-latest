"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import CTASection from "@/components/cta";

const FEATURED_IMAGES = [
  {
    src: "/images/photogallery/WEF2New.png",
    alt: "World Economic Forum 2026",
    description:
      "At the World Economic Forum in Davos (YEAR), TRIIBE connected with global leaders to spotlight youth-led nonprofit innovation and expand the mentorship, funding, and community founders need to scale impact.",
  },
  {
    src: "/images/photogallery/ChangemakersSummit11New.png",
    alt: "Summit Discussion",
    description:
      "Founder cohorts learning from mentors, celebrating milestones, and building support systems.",
  },
  {
    src: "/images/photogallery/ChangemakersSummit12New.png",
    alt: "Urban Impact",
    description:
      "Exploring the full archive by event and cohort below to see our local impact.",
  },
  {
    src: "/images/photogallery/ChangemakersSummit32New.png",
    alt: "Community Dinner",
    description:
      "Building the support to sustain youth-led nonprofits through college and beyond.",
  },
  {
    src: "/images/photogallery/TeamDinner2New.png",
    alt: "Team Celebration",
    description:
      "Celebrating milestones and planning for the future of social impact.",
  },
];

const ARCHIVE_ITEMS = [
  {
    id: "wef",
    title: "World Economic Forum 2026",
    image: "/images/photogallery/WEF1New.png",
    description:
      "At the World Economic Forum in Davos (YEAR), TRIIBE connected with global leaders to spotlight youth-led nonprofit innovation and expand the mentorship, funding, and community founders need to scale impact.",
    allPhotos: [
      "/images/photogallery/WEF1New.png",
      "/images/photogallery/WEF2New.png",
      "/images/photogallery/WEF3New.png",
    ],
  },
  {
    id: "summit",
    title: "Changemakers Summit 2025",
    image: "/images/photogallery/ChangemakersSummit14New.png",
    description:
      "The TRIIBE Changemaker Summit brought together next-gen changemakers and seasoned leaders for an afternoon of storytelling, real-world lessons, and community building at Newlab in Brooklyn.",
    allPhotos: [
      "/images/photogallery/ChangemakersSummit11New.png",
      "/images/photogallery/ChangemakersSummit12New.png",
      "/images/photogallery/ChangemakersSummit13New.png",
      "/images/photogallery/ChangemakersSummit14New.png",
      "/images/photogallery/ChangemakersSummit15New.png",
      "/images/photogallery/ChangemakersSummit21New.png",
      "/images/photogallery/ChangemakersSummit22New.png",
      "/images/photogallery/ChangemakersSummit23New.png",
      "/images/photogallery/ChangemakersSummit24New.png",
      "/images/photogallery/ChangemakersSummit25New.png",
      "/images/photogallery/ChangemakersSummit31New.png",
      "/images/photogallery/ChangemakersSummit32New.png",
      "/images/photogallery/ChangemakersSummit33New.png",
    ],
  },
  {
    id: "dinner",
    title: "Team Dinner 2025",
    image: "/images/photogallery/TeamDinner2New.png",
    description:
      "At the World Economic Forum in Davos (YEAR), TRIIBE connected with global leaders to spotlight youth-led nonprofit innovation and expand the mentorship, funding, and community founders need to scale impact.",
    allPhotos: [
      "/images/photogallery/TeamDinner1New.png",
      "/images/photogallery/TeamDinner2New.png",
      "/images/photogallery/TeamDinner3New.png",
      "/images/photogallery/TeamDinner4New.png",
    ],
  },
  {
    id: "binky",
    title: "Binky",
    image: "/images/photogallery/Binky2New.png",
    description:
      "Binky is the loyal companion to Anthony, Director of Marketing and Communications at TRIIBE, and an invaluable and beloved supporter to the whole team. She brings warmth and joy to everything TRIIBE does.",
    allPhotos: [
      "/images/photogallery/Binky1New.png",
      "/images/photogallery/Binky2New.png",
      "/images/photogallery/Binky3New.png",
    ],
  },
];

const PhotoGallery = () => {
  const [activePhoto, setActivePhoto] = useState(FEATURED_IMAGES[0]);
  const [selectedArchive, setSelectedArchive] = useState<
    (typeof ARCHIVE_ITEMS)[0] | null
  >(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  // Close modal on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArchive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const nextPhoto = () => {
    if (!selectedArchive) return;
    setCurrentPhotoIdx((prev) => (prev + 1) % selectedArchive.allPhotos.length);
  };

  const prevPhoto = () => {
    if (!selectedArchive) return;
    setCurrentPhotoIdx(
      (prev) =>
        (prev - 1 + selectedArchive.allPhotos.length) %
        selectedArchive.allPhotos.length,
    );
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      <section className="pt-32 pb-12 px-4 md:px-25 lg:px-50">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/about"
            className="flex items-center gap-2 text-[#4A5565]  mb-12  w-fit "
          >
            <ArrowLeft size={20} className="" />
            <span className="text-sm underline underline-offset-4 text-[#4A5565]">
              Back to About page
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Photo Gallery
          </h1>

          {/* 1. MAIN FEATURED IMAGE */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg mb-8 bg-gray-100">
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/50 md:pt-4 md:pb-4 px-2 py-1 md:px-10">
              <p className="text-white text-xs md:text-base leading-relaxed max-w-[950px]">
                {activePhoto.description}
              </p>
            </div>
          </div>

          {/* 2. FIVE THUMBNAILS */}
          <div className="flex justify-center gap-2 md:gap-4 mb-20">
            {FEATURED_IMAGES.map((photo, index) => (
              <button
                key={index}
                onClick={() => setActivePhoto(photo)}
                className={`relative w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                  activePhoto.src === photo.src
                    ? "ring-2 ring-[#1C5945] opacity-100 scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* 3. CTA SECTION */}
          <div className="max-w-[800px] mx-auto  space-y-8 mb-4">
            <p className="text-black text-lg leading-relaxed max-w-195 mx-auto">
              This gallery captures TRIIBE in motion—founder cohorts learning
              from mentors, celebrating milestones, and building the support to
              sustain youth-led nonprofits through college and beyond. Browse
              featured photos, then explore the full archive by event and cohort
              below.
            </p>
            <p className="text-black text-lg leading-relaxed max-w-195 mx-auto">
              Want what’s next? Visit our events page to join a gathering or
              support the founders shaping the future of social impact.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/triibetalk"
                className="bg-[#1C5945] text-white px-12 py-3.5 rounded-lg font-bold hover:bg-[#164737] transition-colors"
              >
                Triibe Talk
              </Link>
            </div>
          </div>

          {/* 4. ARCHIVE GRID (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="pt-32 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
              Archive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {ARCHIVE_ITEMS.map((item, index) => (
                <div key={index} className="flex flex-col h-full">
                  <h3 className="text-xl md:text-2xl font-normal text-[#303641] mb-2 min-h-[60px] md:min-h-[80px] flex ">
                    {item.title}
                  </h3>
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 shadow-sm bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow text-left">
                    <p className="text-sm text-[#495565] leading-relaxed mb-4 line-clamp-5 flex-grow">
                      {item.description}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedArchive(item);
                        setCurrentPhotoIdx(0);
                      }}
                      className="text-[#495565] text-sm font-medium underline hover:text-[#1C5945] w-fit cursor-pointer"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      {selectedArchive && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <button
            onClick={() => setSelectedArchive(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevPhoto}
            className="absolute left-4 md:left-10 text-white/50 hover:text-white z-[110]"
          >
            <ChevronLeft size={64} className="w-16 h-16" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[110]"
          >
            <ChevronRight size={64} className="w-16 h-16" />
          </button>
          <div className="relative w-[90%] h-[80%] flex flex-col items-center">
            <div className="relative w-full h-full">
              <Image
                src={selectedArchive.allPhotos[currentPhotoIdx]}
                alt="Gallery"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6 text-center text-white">
              <p className="font-bold text-lg">{selectedArchive.title}</p>
              <p className="text-white/50 text-sm">
                Image {currentPhotoIdx + 1} of{" "}
                {selectedArchive.allPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection />

      <Footer />
    </main>
  );
};

export default PhotoGallery;
