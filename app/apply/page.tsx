"use client";

import { useRef, useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const isApplicationOpen = false;
  const formRef = useRef<HTMLFormElement>(null);

  const handleCancel = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const faqs = [
    {
      question: "How do I apply for a cohort?",
      answer:
        "To apply, complete the application form on this page, attaching your 5-minute video link. You'll receive confirmation once your application has been received.",
    },
    {
      question: "Who is eligible to apply?",
      answer:
        "Any undergraduate sophomore who has founded and is actively leading a nonprofit organization. You must be enrolled full-time at a college or university.",
    },
    {
      question: "What is the selection process?",
      answer:
        "Our process starts with a thoughtful review of your application and video, then invites semi-finalists for interviews.",
    },
    {
      question: "What support do selected sophomores receive?",
      answer:
        "Finalists receive a $5,000 grant, mentorship, podcast feature, and entry into our community. For a fuller look at additional opportunities, like the Summit, retreat, and documentaries, see the deck above.",
    },
    {
      question: "How long is the program?",
      answer:
        "TRIIBE's three-year program supports you through the rest of college, with each year building toward continuing your work beyond graduation. Afterwards, alumni stay connected, ensuring lifelong belonging and support.",
    },
    {
      question: "When will I hear back?",
      answer:
        "All applicants are notified within two weeks of the application closing, and we keep communication clear and consistent throughout.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 md:px-[200px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]  gap-16 items-start">
            {/* Left - Image */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/about/about-photo-2.jpg"
                alt="TRIIBE Cohort"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h1 className="font-bold text-black text-4xl md:text-[40px] mb-6 leading-tight">
                Apply to be in a Cohort
              </h1>

              <p className="font-normal text-[#495565] text-[16px] leading-relaxed mb-4">
                We're looking for passionate undergraduate nonprofit founders
                ready to take their organizations to the next level.
              </p>

              {/* How to Apply Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h2 className="font-bold text-black text-xl mb-3">
                  How to Apply
                </h2>

                <p className="font-normal text-[#495565] text-base mb-3 leading-relaxed">
                  Instead of a pitch deck, please submit a short video (up to 5
                  minutes) describing:
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — What motivates your work? (Your Why)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — How have you made a difference? (Your Impact)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — How would you use your first grant? (Your Pitch)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 md:px-[200px] bg-[#3036411A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-black text-4xl mb-4">
            Application Form
          </h2>
          <p className="font-normal text-[#495565] text-base mb-12">
            Please fill out all fields. Fields marked with * are required.
          </p>
          {isApplicationOpen ? (
            <div className="bg-white rounded-lg p-8 md:p-12">
              <form
                ref={formRef}
                action="https://formsubmit.co/partnerships@triibe.org" //team@triibe.us
                method="POST"
              >
                {/* Hidden FormSubmit configurations */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Cohort Application"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://yourwebsite.com/apply?submitted=true"
                />
                {/* Row 1: Full Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="your.email@university.edu"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: LinkedIn and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="LinkedIn Profile"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="Location"
                      placeholder="City, State/Country"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Organization Name and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      name="Organization Name"
                      placeholder="Your nonprofit organization name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Organization Website
                    </label>
                    <input
                      type="url"
                      name="Organization Website"
                      placeholder="https://"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Row 4: Video Application Link and Message */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Video Application Link *
                    </label>
                    <input
                      type="url"
                      name="Video Application Link"
                      placeholder="https://youtube.com/watch?v=... or Loom link"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                      required
                    />
                    <p className="font-normal text-[#697282] text-xs mt-2">
                      Please record a 2-3 minute video introducing yourself,
                      your organization, and why you'd like to attend the
                      Summit.
                    </p>
                  </div>

                  <div>
                    <label className="block font-semibold text-black text-sm mb-2">
                      Message to the Team
                    </label>
                    <textarea
                      name="Message"
                      placeholder="Is there anything else you'd like us to know?"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row  justify-end gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-base cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#002c19] text-white rounded-lg hover:bg-[#003d24] transition-colors font-semibold text-base cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-10 md:p-16 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Opening Soon
              </h3>
              <p className="text-[#495565] text-lg">
                Applications for the Spring 2026 cohort will open later this
                spring.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Deck Section */}
      <section className="py-12 px-4 md:px-[200px] bg-white">
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

      {/* Section 4: Application FAQs */}

      <section className="pt-16 pb-8 px-4 md:px-[200px] bg-[#3036411A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Application FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-gray-700 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
