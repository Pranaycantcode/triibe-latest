"use client";

import React, { useState, ChangeEvent } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ArrowRight,
  Send,
  Check,
  Plus,
  ArrowLeft,
  CircleCheck,
  CircleCheckBig,
  ChevronDown,
  X,
  AlertCircle,
} from "lucide-react";

// --- Types for Form Data ---
interface Speaker {
  name: string;
  role: string;
  company: string;
  linkedin: string;
  category: "Next-Gen" | "Established";
}

interface FormData {
  fullName: string;
  email: string;
  linkedin: string;
  organization: string;
  bio: string;
  venueName: string;
  city: string;
  state: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  themes: string[];
  description: string;
  speakers: Speaker[];
  eventDescription: string;
}

const HostEventPage = () => {
  const [emailTouched, setEmailTouched] = useState(false);
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    linkedin: "",
    organization: "",
    bio: "",
    venueName: "",
    city: "",
    state: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventDescription: "",
    themes: [],
    description: "",
    speakers: [
      { name: "", role: "", company: "", linkedin: "", category: "Next-Gen" },
    ],
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);

  const isStepValid = () => {
    if (step === 1) {
      return (
        formData.fullName.trim() !== "" &&
        isEmailValid &&
        formData.linkedin.trim() !== "" &&
        formData.bio.trim() !== ""
      );
    }
    if (step === 2) {
      return (
        formData.venueName.trim() !== "" &&
        formData.city.trim() !== "" &&
        formData.state.trim() !== "" &&
        formData.eventDate !== "" &&
        formData.startTime !== "" &&
        formData.endTime !== ""
      );
    }
    if (step === 3) {
      return (
        formData.themes.length > 0 &&
        formData.speakers.every((s) => s.name.trim() !== "")
      );
    }
    return true;
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const addSpeaker = () => {
    setFormData({
      ...formData,
      speakers: [
        ...formData.speakers,
        { name: "", role: "", company: "", linkedin: "", category: "Next-Gen" },
      ],
    });
  };

  const updateSpeaker = (
    index: number,
    field: keyof Speaker,
    value: string,
  ) => {
    const newSpeakers = [...formData.speakers];
    newSpeakers[index] = { ...newSpeakers[index], [field]: value } as Speaker;
    setFormData({ ...formData, speakers: newSpeakers });
  };

  const steps = [
    { id: 1, label: "Your Information" },
    { id: 2, label: "Event Location" },
    { id: 3, label: "Theme & Speakers" },
    { id: 4, label: "Review & Submit" },
  ];

  return (
    <main className="bg-[#F9FAFB] min-h-screen font-sans">
      <Header />

      <section className="pt-24 pb-20 px-4 md:px-25 lg:px-50 ">
        <div className="max-w-300 mx-auto">
          <div className="flex items-center gap-4 mb-10 ">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer text-gray-500 flex items-center gap-1 text-sm hover:text-black transition-all"
            >
              <ArrowLeft size={16} /> Back to Events
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <h1 className="font-bold text-lg text-[#002C19]">Host an Event</h1>
          </div>

          <div className="max-w-[600px] mx-auto">
            <div className="flex justify-between items-center mb-10 md:mb-16 relative w-full px-2">
              {steps.map((s, idx) => (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        step > s.id
                          ? "bg-[#1C5945] border-[#1C5945] text-white"
                          : step === s.id
                            ? "bg-[#1C5945] border-[#1C5945] text-white"
                            : "bg-gray-200 border-gray-200 text-gray-400"
                      }`}
                    >
                      {step > s.id ? (
                        <CircleCheckBig size={16} className="md:w-5 md:h-5" />
                      ) : (
                        <span className="text-xs md:text-sm font-bold">
                          {s.id}
                        </span>
                      )}
                    </div>

                    <span
                      className={`hidden md:block absolute -bottom-8 whitespace-nowrap text-[12px] font-medium  tracking-widest text-center ${
                        step === s.id ? "text-[#1C5945]" : "text-gray-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="flex-grow mx-2 md:mx-4">
                      <div
                        className={`h-[2px] w-full transition-all duration-500 ${
                          step > s.id ? "bg-[#1C5945]" : "bg-gray-200"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="max-w-[720px] mx-auto">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-14">
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">
                      Tell us about yourself
                    </h2>
                    <p className="text-gray-500">
                      We'd love to learn about you and your organization.
                    </p>
                  </div>
                  <div className="grid gap-6">
                    <InputField
                      label="Full Name *"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(v: string) =>
                        setFormData({ ...formData, fullName: v })
                      }
                    />
                    <InputField
                      label="Email Address *"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(v: string) => {
                        setFormData({ ...formData, email: v });
                        if (!emailTouched) setEmailTouched(true);
                      }}
                    />
                    {/* Error Message */}
                    {emailTouched &&
                      formData.email.length > 0 &&
                      !isEmailValid && (
                        <p className="text-red-500 text-xs font-medium ml-1 animate-in fade-in slide-in-from-top-1">
                          Please enter a valid email address
                        </p>
                      )}
                    <InputField
                      label="LinkedIn Profile *"
                      placeholder="www.linkedin.com/in/"
                      value={formData.linkedin}
                      onChange={(v: string) =>
                        setFormData({ ...formData, linkedin: v })
                      }
                    />
                    <InputField
                      label="Organization"
                      placeholder="Your organization name"
                      value={formData.organization}
                      onChange={(v: string) =>
                        setFormData({ ...formData, organization: v })
                      }
                    />
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700">
                        Short Bio *
                      </label>
                      <textarea
                        className="w-full p-4 rounded-2xl bg-white border border-gray-200 min-h-[140px] focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all"
                        placeholder="Tell us a bit about yourself and why you want to host..."
                        value={formData.bio}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setFormData({ ...formData, bio: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">
                      Event Location & Time
                    </h2>
                    <p className="text-gray-500">
                      Where and when would you like to host the event?
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 relative">
                      <InputField
                        label="Venue Name *"
                        placeholder="e.g. Copacabana Nightclub"
                        value={formData.venueName}
                        onChange={(v: string) =>
                          setFormData({ ...formData, venueName: v })
                        }
                      />
                      <button className="absolute right-4 bottom-4 text-xs font-medium text-[#1C5945] uppercase tracking-wider">
                        Open Maps
                      </button>
                    </div>
                    <InputField
                      label="City *"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(v: string) =>
                        setFormData({ ...formData, city: v })
                      }
                    />
                    <InputField
                      label="State *"
                      placeholder="New York"
                      value={formData.state}
                      onChange={(v: string) =>
                        setFormData({ ...formData, state: v })
                      }
                    />
                    <div className="col-span-2">
                      <InputField
                        label="Event Date *"
                        type="date"
                        value={formData.eventDate}
                        onChange={(v: string) =>
                          setFormData({ ...formData, eventDate: v })
                        }
                      />
                    </div>
                    <InputField
                      label="Start Time *"
                      type="time"
                      value={formData.startTime}
                      onChange={(v: string) =>
                        setFormData({ ...formData, startTime: v })
                      }
                    />
                    <InputField
                      label="End Time *"
                      type="time"
                      value={formData.endTime}
                      onChange={(v: string) =>
                        setFormData({ ...formData, endTime: v })
                      }
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">
                      Theme & Speakers
                    </h2>
                    <p className="text-gray-500">
                      What will your TRIIBE Talk be about and who will be
                      speaking?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Theme *
                    </label>

                    <div className="relative w-full border border-gray-200 rounded-2xl bg-white hover:border-gray-300 focus-within:ring-2 focus-within:ring-[#1C5945]/10 transition-all cursor-pointer overflow-hidden mt-2">
                      <select
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-0"
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val && !formData.themes.includes(val)) {
                            setFormData({
                              ...formData,
                              themes: [...formData.themes, val],
                            });
                          }
                          e.target.value = "";
                        }}
                      >
                        <option value="">Select themes...</option>
                        <option value="Food">Food</option>
                        <option value="Water">Water</option>
                        <option value="Shelter">Shelter</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                      </select>

                      <div className="flex flex-wrap gap-2 items-center p-2 relative z-10 pointer-events-none">
                        {formData.themes.length === 0 && (
                          <span className="text-gray-400 text-sm ml-2">
                            Select event themes...
                          </span>
                        )}

                        {formData.themes.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-[#D1FAE5] text-[#065F46] border border-[#1C5945]/30 rounded-full text-xs font-bold flex items-center gap-2 pointer-events-auto"
                          >
                            {t}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setFormData({
                                  ...formData,
                                  themes: formData.themes.filter(
                                    (theme) => theme !== t,
                                  ),
                                });
                              }}
                              className="hover:text-red-600 transition-colors cursor-pointer relative z-30"
                            >
                              <X size={12} strokeWidth={3} />
                            </button>
                          </span>
                        ))}
                      </div>

                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-10">
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    {formData.themes.length > 1 && (
                      <div className="mt-2 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3 animate-in slide-in-from-top-2">
                        <div className="text-amber-600 pt-0.5">
                          <AlertCircle size={18} />
                        </div>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          <strong>Note:</strong> Selecting multiple themes
                          requires additional time allotment.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Event Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what attendees can expect..."
                      className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all resize-none text-sm placeholder:text-gray-300 mt-2"
                      value={formData.eventDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventDescription: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              <div className="mt-14 pt-8 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => {
                    if (step === 1) {
                      router.push("/triibetalk");
                    } else {
                      prevStep();
                    }
                  }}
                  className="text-[#30364166] font-bold text-sm flex items-center gap-2 hover:text-black transition-all cursor-pointer"
                >
                  <ArrowLeft size={18} /> {step === 1 ? "Cancel" : "Back"}
                </button>

                <button
                  onClick={step === 4 ? () => alert("Submitting...") : nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center gap-3 px-10 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    isStepValid()
                      ? "bg-[#1C5945] text-white  cursor-pointer"
                      : "bg-[#E5E7EB] text-[#30364166] cursor-not-allowed"
                  }`}
                >
                  {step === 4 ? "Submit Request" : "Continue"}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-full p-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all"
    />
  </div>
);

export default HostEventPage;
