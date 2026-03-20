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
  organisation: string;
  linkedin: string;
  category: "Established (Over 30)" | "Next-Gen";
}

interface FormData {
  fullName: string;
  email: string;
  linkedin: string;
  organization: string;
  bio: string;
  readGuide: string;
  venueName: string;
  city: string;
  state: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  theme: string;
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
    readGuide: "No",
    venueName: "",
    city: "",
    state: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventDescription: "",
    theme: "",
    description: "",
    speakers: [
      {
        name: "",
        role: "",
        organisation: "",
        linkedin: "",
        category: "Next-Gen",
      },
    ],
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);

  const isStep3Valid = formData.speakers.every(
    (s) =>
      s.name.trim() !== "" &&
      s.role.trim() !== "" &&
      s.organisation.trim() !== "" &&
      s.linkedin.trim() !== "" &&
      formData.theme !== "",
  );

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
        formData.theme !== "" &&
        formData.eventDescription.trim() !== "" &&
        formData.speakers.every(
          (s) =>
            s.name.trim() !== "" &&
            s.role.trim() !== "" &&
            s.organisation.trim() !== "" &&
            s.linkedin.trim() !== "",
        )
      );
    }

    return true;
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const addSpeaker = () => {
    if (formData.speakers.length < 4) {
      setFormData({
        ...formData,
        speakers: [
          ...formData.speakers,
          {
            name: "",
            role: "",
            organisation: "",
            linkedin: "",
            category: "Next-Gen",
          },
        ],
      });
    } else {
      alert("Maximum of 4 speakers allowed.");
    }
  };

  const updateSpeaker = (
    index: number,
    field: keyof Speaker,
    value: string,
  ) => {
    const updatedSpeakers = [...formData.speakers];
    updatedSpeakers[index] = { ...updatedSpeakers[index], [field]: value };
    setFormData({ ...formData, speakers: updatedSpeakers });
  };

  const steps = [
    { id: 1, label: "Your Information" },
    { id: 2, label: "Event Location" },
    { id: 3, label: "Theme & Speakers" },
    { id: 4, label: "Review & Submit" },
  ];

  return (
    <main className=" min-h-screen ">
      <Header />

      <section className="pt-20  px-4 md:px-25 lg:px-50 bg-white">
        <div>
          <div className="flex items-center gap-4 mb-4 ">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer text-gray-500 flex items-center gap-1 text-sm hover:text-black transition-all"
            >
              <ArrowLeft size={16} /> Back to Events
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <h1 className="font-bold text-lg text-[#002C19]">Host an Event</h1>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-4 md:px-25 lg:px-50 bg-[#F9FAFB]">
        <div className="max-w-300 mx-auto">
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

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 block">
                        Have you read the guide? *
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer group"
                          >
                            <div className="relative flex items-center justify-center">
                              <input
                                type="radio"
                                name="readGuide"
                                value={option}
                                checked={formData.readGuide === option}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    readGuide: e.target.value,
                                  })
                                }
                                className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-full checked:border-[#1C5945] transition-all"
                              />

                              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#1C5945] opacity-0 peer-checked:opacity-100 transition-opacity" />
                            </div>
                            <span
                              className={`text-sm font-medium ${formData.readGuide === option ? "text-black" : "text-gray-500"}`}
                            >
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
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
                        placeholder="e.g. WeWork Midtown, NYC"
                        value={formData.venueName}
                        onChange={(v: string) =>
                          setFormData({ ...formData, venueName: v })
                        }
                      />
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
                    <label className="text-sm font-bold text-gray-700 block">
                      Theme *
                    </label>

                    <div className="relative min-h-[56px] w-full border border-gray-200 rounded-2xl bg-white flex items-center px-4 hover:border-gray-300 focus-within:ring-2 focus-within:ring-[#1C5945]/10 transition-all cursor-pointer">
                      <select
                        value={formData.theme}
                        onChange={(e) =>
                          setFormData({ ...formData, theme: e.target.value })
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      >
                        <option value="" disabled>
                          Select a theme...
                        </option>
                        <option value="Food">Food</option>
                        <option value="Water">Water</option>
                        <option value="Shelter">Shelter</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                      </select>

                      <div className="flex items-center w-full z-10 pointer-events-none">
                        {!formData.theme ? (
                          <span className="text-gray-400 text-sm">
                            Select a theme...
                          </span>
                        ) : (
                          <span className="px-4 py-1.5 bg-[#D1FAE5] text-[#065F46] border border-[#1C5945]/30 rounded-full text-xs font-bold animate-in zoom-in-95 duration-200">
                            {formData.theme}
                          </span>
                        )}
                      </div>

                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 z-10">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700">
                      Event Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what attendees can expect..."
                      className="w-full p-4 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#1C5945]/10 outline-none transition-all resize-none text-sm placeholder:text-[#30364180] mt-2"
                      value={formData.eventDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventDescription: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold text-gray-700">
                        Speakers *
                      </label>
                    </div>
                    {formData.speakers.map((s, i) => {
                      const isLastSpeaker = i === formData.speakers.length - 1;

                      return (
                        <div
                          key={i}
                          className="p-6 bg-[#F9FAFB] rounded-3xl border border-gray-100 space-y-4 mb-4"
                        >
                          <div className="flex justify-between items-center text-xs font-medium text-black  tracking-widest px-1">
                            <span>Speaker {i + 1} </span>
                            <span className="text-gray-900">
                              {s.category === "Next-Gen"
                                ? "Next-Gen Changemaker"
                                : "Established"}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="Speaker name"
                              value={s.name}
                              onChange={(e) =>
                                updateSpeaker(i, "name", e.target.value)
                              }
                            />
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="Title / Role"
                              value={s.role}
                              onChange={(e) =>
                                updateSpeaker(i, "role", e.target.value)
                              }
                            />
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="Organization"
                              value={s.organisation}
                              onChange={(e) =>
                                updateSpeaker(i, "organisation", e.target.value)
                              }
                            />
                            <input
                              className="w-full p-4 text-sm rounded-xl border border-gray-200 bg-white outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                              placeholder="LinkedIn"
                              value={s.linkedin}
                              onChange={(e) =>
                                updateSpeaker(i, "linkedin", e.target.value)
                              }
                            />
                          </div>

                          <div className="flex flex-col gap-4 pt-2">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                              {[
                                {
                                  id: "Established",
                                  label: "Established (Over 30)",
                                },
                                { id: "Next-Gen", label: "Next-Gen" },
                              ].map((option) => (
                                <label
                                  key={option.id}
                                  className="flex items-center gap-2 cursor-pointer group"
                                >
                                  <div className="relative flex items-center justify-center">
                                    <input
                                      type="radio"
                                      name={`category-${i}`}
                                      checked={s.category === option.id}
                                      onChange={() =>
                                        updateSpeaker(i, "category", option.id)
                                      }
                                      className="peer appearance-none w-4 h-4 border border-gray-400 rounded-full checked:border-black transition-all"
                                    />
                                    <div className="absolute w-2 h-2 rounded-full bg-black opacity-0 peer-checked:opacity-100 transition-opacity" />
                                  </div>
                                  <span
                                    className={`text-sm ${
                                      s.category === option.id
                                        ? "text-black font-medium"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {option.label}
                                  </span>
                                </label>
                              ))}
                            </div>

                            {isLastSpeaker && (
                              <div className="flex justify-end">
                                <button
                                  type="button"
                                  onClick={addSpeaker}
                                  disabled={formData.speakers.length >= 4}
                                  className={`font-bold text-sm transition-all ${
                                    formData.speakers.length >= 4
                                      ? "text-gray-500 cursor-not-allowed"
                                      : "text-[#1C5945] hover:opacity-80"
                                  }`}
                                >
                                  {formData.speakers.length >= 4
                                    ? "Only 4 speakers allowed"
                                    : "+ Add Speaker"}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div>
                    <h2 className="text-2xl font-bold text-[#002C19] mb-2">
                      Review Your Request
                    </h2>
                    <p className="text-sm text-gray-500 mb-8">
                      Please review all details before submitting.
                    </p>
                  </div>

                  <ReviewSection
                    title="Host Information"
                    data={[
                      { l: "Name", v: formData.fullName },
                      { l: "Email", v: formData.email },
                      { l: "LinkedIn", v: formData.linkedin },
                      { l: "Organization", v: formData.organization },
                      { l: "Bio", v: formData.bio },
                    ]}
                  />

                  <ReviewSection
                    title="Event Location & Time"
                    showMap={true}
                    data={[
                      { l: "Venue", v: formData.venueName },
                      {
                        l: "Location",
                        v: `${formData.city}, ${formData.state}`,
                      },
                      { l: "Date", v: formData.eventDate },
                      {
                        l: "Time",
                        v: `${formData.startTime} - ${formData.endTime}`,
                      },
                    ]}
                  />

                  <ReviewSection
                    title="Theme & Speakers"
                    theme={formData.theme}
                    description={formData.eventDescription}
                    speakers={formData.speakers}
                    venue={formData.venueName}
                    city={formData.city}
                  />
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-100">
                <button
                  onClick={prevStep}
                  className="flex items-center justify-center gap-2 px-6 py-4 text-gray-500 font-bold hover:text-black transition-all order-2 md:order-1"
                >
                  <ArrowLeft size={18} /> Back
                </button>

                <button
                  onClick={step === 4 ? () => alert("Submitting...") : nextStep}
                  disabled={!isStepValid()}
                  className={`flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold transition-all duration-300 order-1 md:order-2 ${
                    isStepValid()
                      ? "bg-[#1C5945] text-white cursor-pointer"
                      : "bg-[#E5E7EB] text-[#30364166] cursor-not-allowed"
                  }`}
                >
                  {step === 4 ? (
                    <>
                      <Send size={18} /> Submit
                    </>
                  ) : (
                    <>
                      Continue <ArrowRight size={18} />
                    </>
                  )}
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

const ReviewSection = ({
  title,
  data,
  showMap = false,
  theme,
  description,
  speakers,
  venue,
  city,
}: {
  title: string;
  data?: { l: string; v: string }[];
  showMap?: boolean;
  theme?: string;
  description?: string;
  speakers?: Speaker[];
  venue?: string;
  city?: string;
}) => (
  <div className="p-8 bg-[#F9FAFB] rounded-[32px] border border-gray-100">
    <h4 className="text-[14px] font-bold text-[#1C5945]  mb-2 ">{title}</h4>
    <div className="flex justify-between gap-6 items-center">
      <div className="space-y-3 flex-1">
        {data?.map((item, i) => (
          <p key={i} className="text-sm text-gray-600">
            <span className="font-bold text-gray-900">{item.l}:</span>{" "}
            {item.v || "Not provided"}
          </p>
        ))}

        {theme && (
          <div className="space-y-4 mt-0">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">Topic:</span> {theme}
            </p>

            {description && (
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">Description:</span>{" "}
                {description}
              </p>
            )}
            {speakers && (
              <div className="space-y-1">
                <p className="text-sm font-bold text-gray-900">Speakers:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  •{" "}
                  {speakers
                    .map((s) => s.name)
                    .filter((n) => n.trim() !== "")
                    .join(", ")}{" "}
                  at {venue || "Venue"}, {city || "City"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {showMap && (
        <div className="hidden md:block w-[200px] h-[140px] rounded-[24px] overflow-hidden flex-shrink-0">
          <img
            src="/images/host/mapPlaceholder.png"
            alt="Map View"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/200x120?text=Map+View";
            }}
          />
        </div>
      )}
    </div>
  </div>
);

export default HostEventPage;
