"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ArrowRightIcon,
} from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Receiving TRIIBE’s scholarship support further strengthened the work of Vervient Foundation by highlighting that community and connection matter as much as ideas. Knowing there’s a network of like-minded leaders cheering me on fuels our mission to empower students with an innovation mindset and reminds me that there’s always a shoulder to lean on in this journey.",
    name: "Gitanjali Rao",
    year: "TRIIBE Fellow Fall 2025",
    organization: "Global Keynote, Vervient Foundation est. 2018",
  },
  {
    quote:
      "TRIIBE has been an instrumental resource in making sure that my organization continues to be supported after high school. I'm extremely grateful for all of the support TRIIBE has given Philippine Health Initiative and TRIIBE's emphasis on centering youth changemakers has brought together a great community of incredible founders.",
    name: "Nayla Jimenez",
    year: "TRIIBE Fellow Fall 2025",
    organization: "Founder, Philippine Health Initiative est. 2017",
  },
  {
    quote:
      "Through TRIIBE I’ve experienced what it truly means to be supported while building something meaningful. TRIIBE has provided more than funding, it has offered transformative mentorship,strategic structure, and a powerful community of values-driven founders who continuously challenge me to think bigger and lead with intention. When many young leaders enter college and suddenly find themselves navigating ambition without guidance, TRIIBE fills that gap. They help equip us with the tools, accountability, and clarity needed to turn vision into sustainable impact. Through personalized mentorship, I’ve sharpened my storytelling, strengthened my long-term strategy, and learned how to scale my initiatives thoughtfully. What makes TRIIBE unique is its belief that young leaders should never build alone. The fellowship model fosters collaboration, shared learning, and courageous leadership.",
    name: "Shrusti Amula",
    year: "TRIIBE Fellow Fall 2025",
    organization: "Founder, Rise N Shine Foundation est. 2019",
  },
  {
    quote:
      "I am immensely grateful for the TRIIBE community that has inspired me to continue SEED’s mission in bridging the global climate literacy gap. My TRIIBE mentors and peers are the leaders our world needs.",
    name: "Maya Gowda",
    year: "TRIIBE Fellow Spring 2025",
    organization: "Founder, (SEED) est. 2019",
  },
];

const faqs = [
  {
    question: "How does triibe measure impact?",
    answer:
      "We use case studies and quarterly surveys to measure each founder's digital presence, their sense of community and wellbeing, the impact of their organization, and the funds they raise beyond TRIIBE's grants.",
  },
  {
    question: "Who is eligible to apply?",
    answer:
      "Any undergraduate sophomore who has founded and is actively leading a nonprofit organization. You must be enrolled full-time at a college or university.",
  },
  {
    question: "What can I use the funding for?",
    answer:
      "The funding is unrestricted and can be used for any legitimate organizational expenses including operations, program costs, team compensation, technology, marketing, or other needs that support your nonprofit's mission and growth.",
  },
  {
    question: "How much time commitment is required?",
    answer:
      "We ask for approximately 5-8 hours per week, which includes monthly check-ins, quarterly mentor meetings, cohort workshops, and time for implementing your organizational goals. The program is designed to work alongside your academic commitments.",
  },
  {
    question: "What happens after graduation?",
    answer:
      "Fellows transition to our alumni network with continued access to mentorship, resources, and community. We provide support for post-graduation planning and help ensure organizational continuity as you navigate the next phase of your nonprofit's journey.",
  },
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col gap-12">
      <div className="text-center">
        <h2 className=" font-bold text-black text-4xl mb-4 tracking-[-0.90px] leading-10">
          Hear from Our Fellows
        </h2>
        <p className=" font-normal text-[#303641] text-lg">
          Real stories from student founders who've built sustainable impact
        </p>
      </div>

      <div className="flex items-center justify-between gap-8">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </button>

        <div className="flex-1 text-center">
          <blockquote className="mb-8">
            <p className=" font-normal text-black text-xl md:text-xl leading-relaxed mb-8">
              "{currentTestimonial.quote}"
            </p>
          </blockquote>

          <div className="flex flex-col gap-2">
            <p className=" font-semibold text-[#303641] text-lg">
              {currentTestimonial.name}
            </p>
            <p className=" font-normal text-black text-base">
              {currentTestimonial.year}
            </p>
            <p className=" font-normal text-black text-base">
              {currentTestimonial.organization}
            </p>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-8 h-8 text-black" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#303641] w-8" : "bg-black w-2"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const ProgramPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex w-full flex-col xl:flex-row items-start xl:items-center gap-4 ">
                <Image
                  src="/images/programs/header.svg"
                  alt="TRIIBE"
                  width={80}
                  height={40}
                  priority
                  className="h-8 w-32 md:h-11 md:w-44 shrink-0"
                />
                <h1 className="min-w-0 font-semibold text-black text-4xl md:text-5xl lg:text-6xl tracking-[-1.20px] leading-tight">
                  Three-Year Fellowship
                </h1>
              </div>

              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-[#3036411A]  font-bold text-black text-sm tracking-[0] leading-5">
                  3-YEAR FELLOWSHIP
                </span>
              </div>

              <p className=" font-normal text-[#495565] text-xl leading-8 max-w-200">
                TRIIBE provides funding, mentorship, and community for college
                students taking root today to advance tomorrow
              </p>
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row ">
              <button
                zeffy-form-link="https://www.zeffy.com/embed/donation-form/invest-in-the-future-3?modal=true"
                className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors  font-semibold text-base w-full md:w-auto text-center cursor-pointer"
              >
                Donate
              </button>

              <a
                href="/apply"
                className="w-full md:w-auto px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors text-center font-semibold text-base"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Visual/Infographic */}

      <section className="  px-6 bg-white md:px-25 lg:px-[200px]">
        <div className="max-w-260 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Nonprofit founders are cut off from funding when entering College
            </h1>
          </div>

          {/* <section className="py-8 px-6 bg-gray-50"> */}
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-100 ">
              <div className="relative w-full h-100 rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/images/programs/problem_infographic3.png"
                  alt="The Problem - 80% of student-led nonprofits fade within a year"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Support Section */}
      <section className="py-20 px-4 md:px-25 lg:px-50 bg-white border-t border-gray-200">
        <div className="max-w-260 mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h2 className=" font-bold text-black text-4xl tracking-[-0.90px] leading-10">
                TRIIBE provides Three Pillars of Support
              </h2>
              <p className=" font-normal text-[#495565] text-lg leading-7">
                Everything you need to sustain your growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 - Funding */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#3036411A] rounded flex items-center justify-center">
                  <span className=" font-bold text-black text-xl">1</span>
                </div>
                <h3 className=" font-semibold text-black text-xl leading-7">
                  Funding
                </h3>
                <p className=" font-normal text-[#495565] text-sm leading-[22.8px]">
                  Receive $40K in unrestricted funding to cover operations,
                  team, and program costs.
                </p>
              </div>

              {/* Pillar 2 - Mentorship */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#3036411A] rounded flex items-center justify-center">
                  <span className=" font-bold text-black text-xl">2</span>
                </div>
                <h3 className=" font-semibold text-black text-xl leading-7">
                  Mentorship
                </h3>
                <p className=" font-normal text-[#495565] text-sm leading-[22.8px]">
                  Get matched with two experienced mentors each quarter who
                  understand your specific challenges.
                </p>
              </div>

              {/* Pillar 3 - Community */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#3036411A] rounded flex items-center justify-center">
                  <span className=" font-bold text-black text-xl">3</span>
                </div>
                <h3 className=" font-semibold text-black text-xl leading-7">
                  Community
                </h3>
                <p className=" font-normal text-[#495565] text-sm leading-[22.8px]">
                  Join a cohort of peer founders inspired to pursue social
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your 3-Year Journey Section */}
      <section className="py-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]">
        <div className="max-w-260 mx-auto">
          <div className="flex flex-col gap-16">
            <h2 className=" font-bold text-black text-4xl text-center tracking-[-0.90px] leading-10">
              Your 3-Year Journey
            </h2>

            {/* Year 1: Foundation */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shrink-0">
                  <span className=" font-bold text-white text-xl">Y1</span>
                </div>
                <div className="w-1 bg-black flex-1 mt-4"></div>
              </div>

              <div className="flex-1 pb-12">
                <div className="mb-6">
                  <h3 className=" font-bold text-black text-3xl mb-2">
                    Year 1: Roots
                  </h3>
                  <p className=" font-normal text-[#495565] text-lg">
                    Sophomore Year
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className=" font-normal text-[#697282] text-xs uppercase mb-3 tracking-[0.60px]">
                      FUNDING
                    </p>
                    <p className=" font-bold text-black text-3xl">$5,000</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className=" font-normal text-[#697282] text-xs uppercase mb-3 tracking-[0.60px]">
                      CADENCE
                    </p>
                    <p className=" font-normal text-[#495565] text-sm">
                      Monthly check-ins, Quarterly mentor cycles, Bi-annual
                      cohort meetups
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className=" font-normal text-[#697282] text-xs uppercase mb-4 tracking-[0.60px]">
                    KEY MILESTONES
                  </p>
                  <ul className="space-y-3">
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Clarify mission, vision, and theory of change</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        Build foundational operating model & governance
                      </span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Establish metrics & measurement framework</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Create new fundraising strategy</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Develop storytelling & digital presence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Year 2: Scale */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shrink-0">
                  <span className=" font-bold text-white text-xl">Y2</span>
                </div>
                <div className="w-1 bg-black flex-1 mt-4"></div>
              </div>

              <div className="flex-1 pb-12">
                <div className="mb-6">
                  <h3 className=" font-bold text-black text-3xl mb-2">
                    Year 2: Skyline
                  </h3>
                  <p className=" font-normal text-[#495565] text-lg">
                    Junior Year
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className=" font-normal text-[#697282] text-xs uppercase mb-3 tracking-[0.60px]">
                      FUNDING
                    </p>
                    <p className=" font-bold text-black text-3xl  md:text-[26px] lg:text-3xl">
                      $10,000
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className=" font-normal text-[#697282] text-xs uppercase mb-3 tracking-[0.60px]">
                      CADENCE
                    </p>
                    <p className=" font-normal text-[#495565] text-sm">
                      Monthly check-ins, Quarterly mentor cycles, Bi-annual
                      cohort meetups
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className=" font-normal text-[#697282] text-xs uppercase mb-4 tracking-[0.60px]">
                    KEY MILESTONES
                  </p>
                  <ul className="space-y-3">
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Refine program delivery and expand reach</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Build strategic partnerships & collaborations</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Diversify revenue streams and funding sources</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        Strengthen operations, legal, and finance systems
                      </span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        Launch digital campaigns and thought leadership
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Year 3: Sustainability */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shrink-0">
                  <span className=" font-bold text-white text-xl">Y3</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <h3 className=" font-bold text-black text-3xl mb-2">
                    Year 3: Stars
                  </h3>
                  <p className=" font-normal text-[#495565] text-lg">
                    Senior Year
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className=" font-normal text-[#697282] text-xs uppercase mb-3 tracking-[0.60px]">
                      FUNDING
                    </p>
                    <p className=" font-bold text-black text-3xl md:text-[26px] lg:text-3xl">
                      $25,000
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <p className=" font-normal text-[#697282] text-xs uppercase mb-3 tracking-[0.60px]">
                      CADENCE
                    </p>
                    <p className=" font-normal text-[#495565] text-sm">
                      Monthly check-ins, Quarterly mentor cycles, Bi-annual
                      cohort meetups
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className=" font-normal text-[#697282] text-xs uppercase mb-4 tracking-[0.60px]">
                    KEY MILESTONES
                  </p>
                  <ul className="space-y-3">
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        Develop post-graduation transition & continuity plan
                      </span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Build leadership team and succession strategy</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Secure multi-year funding commitments</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Document impact and prepare for evaluation</span>
                    </li>
                    <li className=" font-normal text-[#495565] text-sm flex items-start">
                      <span className="mr-3">•</span>
                      <span>Launch alumni engagement & long-term support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-25 lg:px-50 bg-gray-50">
        <div className="max-w-260 mx-auto">
          {/* Quarterly Cycle Testimonial */}
          <div className="bg-white border-2 border-black rounded-lg p-8 md:p-10">
            <blockquote className="text-black text-xl font-normal leading-relaxed italic">
              "TRIIBE's Mentorship Program is nothing short of astounding. With
              a busy schedule, I wasn't sure how much time I could give, but the
              ease of entry, flexible commitment, and thoughtful organization
              made it possible to truly support my young changemaker in a way
              that was both meaningful and deeply rewarding."
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-black font-semibold">
                — Jonny Imerman, Co-founder Imerman Angels
              </span>
              <a
                href="https://www.linkedin.com/in/imermanangels/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:opacity-80 transition-opacity"
                aria-label="Jonny Imerman LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How TRIIBE Helps Section */}
      <section className="py-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <div className="flex flex-col gap-12">
            <h2 className=" font-bold text-black text-4xl text-center tracking-[-0.90px] leading-10">
              How TRIIBE Helps: Step-by-Step
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">1</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Onboard & Assess
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Baseline assessment of your nonprofit, goals, and current
                    capacity
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">5</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Measure & Reflect
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Regular checkpoints, surveys, and progress reviews
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">2</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Define the Plan
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Establish priorities, success metrics, and quarterly goals
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">6</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Unlock Funding
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Grants distributed each year as you grow your foundation
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">3</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Match Mentors
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Pairing with experienced mentors aligned to your needs
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">7</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Transition to Alumni
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Continuity planning and long-term support beyond graduation
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center shrink-0">
                  <span className=" font-bold text-black text-xl">4</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold text-black text-xl">
                    Execute with Support
                  </h3>
                  <p className=" font-normal text-[#495565] text-sm">
                    Office hours, tools, resources, and peer community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]">
        <div className="max-w-260 mx-auto">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Deck Section */}
      <section className="py-12 px-4 md:px-25 lg:px-[200px]">
        <div className="max-w-260 mx-auto">
          <div className="max-w-7xl mx-auto transition-all duration-300 hover:scale-105">
            <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-2xl md:text-3xl font-medium text-gray-900">
                For a Full Overview, See Our Deck
              </p>
              <Link
                href="https://drive.google.com/file/d/1XxPb8UfeLXAVUy2zl0mle1lkUe7A2q1K/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black px-10 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faqProgram"
        className="py-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]"
      >
        <div className="max-w-260 mx-auto flex flex-col gap-12">
          <h2 className=" font-bold text-black text-4xl text-center tracking-[-0.90px] leading-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <Minus className="w-5 h-5 text-black shrink-0 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-black shrink-0 transition-transform duration-300" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-200"></div>
                  <div className="mt-4 px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-black rounded-2xl p-12 text-center mt-12">
          <h3 className=" font-bold text-[#98D3D8] text-3xl md:text-4xl mb-6">
            Ready to build your nonprofit?
          </h3>
          <p className=" font-normal text-white text-lg mb-8 max-w-150 mx-auto">
            Applications for the 2026 cohort open March 1st. Join a community of
            student founders building sustainable impact.
          </p>
          <a
            href="/apply"
            className="inline-block px-8 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors  font-semibold text-base"
          >
            Apply Now
          </a>
        </div> */}
      </section>

      <CTASection />

      <Footer />
    </main>
  );
};

export default ProgramPage;
