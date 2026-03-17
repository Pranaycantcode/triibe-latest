"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const ArchivePage = () => {
  const contentByMonth = [
    {
      month: "January 2026",
      items: [
        {
          image: "/images/media/archive/podcast.png",
          category: "podcast",
          title: "High Tech with HAITECH",
          description:
            "The Founder and Product Lead of HAITECH Learning explores her remarkable journey from growing up in Haiti to launching a nonprofit",
          link: "https://www.youtube.com/watch?v=XNUr1NgLq28",
        },
        {
          image: "/images/media/archive/Workshop.png",
          category: "workshop",
          title: "Signal to Noise Branding x The SuperBetter Mindset",
          description:
            "In these virtual workshops, current and next-gen changemakers will present actionable strategies for entrepreneurs, intrapreneurs, and philentrepreneurs.",
          link: "https://www.youtube.com/watch?v=pNKGIByJNnk",
        },
      ],
    },
    {
      month: "November 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6914b8fe53e5c6fdf6125a6c_70632aae-58b7-18fb-bdca-711530df92dd.png",
          category: "newsletter",
          title: "Onboarding Our 6th TRIIBE Branch!",
          description:
            "In the past month, we onboarded 25 new members, bringing our total to nearly 70 and keeping us on track toward our goal of 100 by year-end.",
          link: "https://mailchi.mp/triibe.us/the-triibune-october-newsletter",
        },
      ],
    },
    {
      month: "October 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692cb74da1166445d9deb42b_octobernewsletter.jpg",
          category: "newsletter",
          title: "TRIIBE talk Podcast Launched",
          description:
            "25 new members, NEST, a $268K podcast partnership, dozens of cohort applicants, and a 6th global branch.",
          link: "https://mailchi.mp/triibe.us/the-triibune-october-newsletter",
        },
      ],
    },
    {
      month: "September 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692cb8157677d1fb7dfb7fb8_septembernewsletter-min.jpg",
          category: "newsletter",
          title: "New TRIIBE Office",
          description:
            "Major Climate Week turnout, another new office, global expansion, rapid team growth, updated materials.",
          link: "https://us9.campaign-archive.com/?u=88e516b0368da342b9b8c8a74&id=e03ca8d46f",
        },
      ],
    },
    {
      month: "August 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692e3be0b6af306f7ffa3f9b_Screenshot%202025-12-01%20at%2020.07.02.png",
          category: "newsletter",
          title: "Growing Tenfold",
          description:
            "Announcing new mentors, a new office, major partnerships, grant progress, media features, and an updated mission.",
          link: "https://us9.campaign-archive.com/?u=88e516b0368da342b9b8c8a74&id=f4d75358ac",
        },
      ],
    },
    {
      month: "July 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898ddc0d7fe900272e07504_IMG_1223.jpg",
          category: "newsletter",
          title: "Summit 2025 Recap",
          description:
            "Recapping the Changemaker Summit 2025 with over 110 high-profile attendees while expanding our digital presence.",
          link: "https://mailchi.mp/triibe.us/the-triibune-july-edition",
        },
      ],
    },
    {
      month: "June 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4d92bcc1dd2b90c8c5a_f363186d-31d2-002b-e5f7-9380774261f3.png",
          category: "newsletter",
          title: "Launching Our Summit",
          description:
            "Announcing event sponsors, speakers, and funding for our first summit, alongside new partnerships.",
          link: "https://mailchi.mp/triibe.us/triibe-newsletter-april-edition-4763882",
        },
      ],
    },
    {
      month: "May 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4b9c1cd99f5b1d43464_d5ad1fc5-982a-4cc7-031c-ea1ab13290ea.png",
          category: "newsletter",
          title: "Our First Cohort",
          description:
            "Welcoming our first cohort as they connect with mentors and debuting TRIIBE merchandise.",
          link: "https://mailchi.mp/triibe.us/triibe-newsletter-april-edition-4763842",
        },
      ],
    },
    {
      month: "April 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4956e3ee6fe54674578_Screenshot%202025-08-31%20at%207.59.49%E2%80%AFPM.png",
          category: "newsletter",
          title: "6 Month Anniversary",
          description:
            "Celebrating our 6-month anniversary, achieving 501(c)(3) status, joining the Wasserman Unstoppable Accelerator.",
          link: "https://mailchi.mp/cd1434665037/triibe-newsletter-april-edition",
        },
      ],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "podcast":
        return "bg-purple-100 text-purple-700";
      case "workshop":
        return "bg-blue-100 text-blue-700";
      case "newsletter":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Placeholder for future workshops - you can add real data later

  return (
    <main className="min-h-screen ">
      <Header />

      {/* Header */}
      <section className="py-4 mt-20 md:px-12 lg:px-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/media"
            className="inline-flex items-center text-black hover:text-green-950  transition-colors text-[16px]"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Media
          </Link>
        </div>
      </section>

      {/* Newsletters Section */}

      <section className="py-8 bg-white md:px-12 lg:px-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Archive
          </h2>

          {contentByMonth.map((monthData, monthIndex) => (
            <div key={monthIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                {monthData.month}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthData.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`${getCategoryColor(
                            item.category,
                          )} px-3 py-1 rounded-full text-xs font-semibold uppercase`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg px-8 md:px-12 py-8 md:py-10 hover:scale-105 transition-transform">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stay informed. Join the TRIIBE
            </h3>
            <Link
              href="https://mailchi.mp/triibe.us/subscribe-to-triibe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default ArchivePage;
