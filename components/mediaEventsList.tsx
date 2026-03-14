"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Share,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";

export default function MediaEventsList() {
  const router = useRouter();
  const [viewDate, setViewDate] = useState(new Date());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [filter, setFilter] = useState("ALL EVENTS");
  const [isMounted, setIsMounted] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const loadEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/events");
        const data = await res.json();

        const formatted = data.entries.map((entry: any) => {
          const endDate = new Date(entry.event.end_at);
          const now = new Date();

          // Calculate days ago
          const diffTime = Math.abs(now.getTime() - endDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const isPast = endDate < now;
          const geo = entry.event.geo_address_json;
          const locationString = geo
            ? `${geo.address}, ${geo.city}, ${geo.region}`
            : "Virtual";

          return {
            id: entry.event.api_id,
            title: entry.event.name,
            isoStart: entry.event.start_at,
            isoEnd: entry.event.end_at,
            location: locationString,
            type: entry.event.geo_address_json ? "IN-PERSON" : "VIRTUAL",
            image: entry.event.cover_url,
            lumaUrl: entry.event.url,
            status:
              new Date(entry.event.end_at) > new Date() ? "open" : "closed",
            isPast: isPast,
            daysAgo: diffDays,
            guestCount: entry.guestCount ?? null,
          };
        });

        setEvents(formatted);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthName = months[viewDate.getMonth()];

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.isoStart);
    return (
      eventDate.getMonth() === viewDate.getMonth() &&
      eventDate.getFullYear() === viewDate.getFullYear() &&
      (filter === "ALL EVENTS" || event.type === filter)
    );
  });

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(monthIndex);
    newDate.setFullYear(calendarYear);
    setViewDate(newDate);
    setIsCalendarOpen(false);
  };

  const formatDisplayRange = (startStr: string, endStr: string) => {
    const start = new Date(startStr);
    const end = new Date(endStr);
    return {
      date: start.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
      localRange: `${start.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })} – ${end.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`,
    };
  };

  return (
    <section className="py-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <h2 className="text-4xl font-bold text-black">
            {currentMonthName} Events
          </h2>

          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="relative" ref={calendarRef}>
              <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <Calendar size={22} className="text-black" />
              </button>
              {isCalendarOpen && (
                <div className="absolute top-full mt-4 right-0 w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-[100] p-6">
                  <div className="flex justify-between items-center mb-6">
                    <button onClick={() => setCalendarYear(calendarYear - 1)}>
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-bold text-xl">{calendarYear}</span>
                    <button onClick={() => setCalendarYear(calendarYear + 1)}>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 border-l border-t border-gray-100">
                    {months.map((m, idx) => (
                      <button
                        key={m}
                        onClick={() => handleMonthSelect(idx)}
                        className={`py-4 text-sm border-r border-b ${idx === viewDate.getMonth() && calendarYear === viewDate.getFullYear() ? "bg-[#303641] text-white" : "hover:bg-gray-50"}`}
                      >
                        {m.substring(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {["ALL EVENTS", "VIRTUAL", "IN-PERSON"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full text-xs font-bold ${filter === type ? "bg-[#1C5945] text-white" : "bg-white border"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 min-h-[200px]">
          {loading ? (
            <p>Loading...</p>
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event) => {
              const timeData = formatDisplayRange(event.isoStart, event.isoEnd);
              return (
                <div
                  key={event.id}
                  className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm flex flex-col md:flex-row gap-6"
                >
                  <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-grow flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-black">
                        {event.title}
                      </h3>
                      <div className="flex flex-col gap-2 text-sm text-[#495565]">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#495565]">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-gray-400" />
                            <span>{timeData.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-gray-400" />
                            <span>{timeData.localRange}</span>
                          </div>
                        </div>
                        {/* LOCATION */}
                        <div className="flex items-center gap-2 text-sm text-[#495565]">
                          <MapPin size={14} className="text-gray-400" />
                          <span>{event.location}</span>
                        </div>
                        {/* GUEST COUNT */}
                        <div className="flex items-center gap-2 text-sm text-[#495565]">
                          <Users size={14} className="text-gray-400" />
                          <span>
                            {event.guestCount !== null
                              ? `${event.guestCount} ${event.isPast ? "went" : "going"}`
                              : "Guest count hidden"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (event.lumaUrl) {
                            navigator.clipboard.writeText(event.lumaUrl);
                            alert("Registration link copied to clipboard!");
                          }
                        }}
                        className="p-3 text-gray-400 border border-gray-200 rounded-xl hover:bg-gray-50"
                        title="Copy Link"
                      >
                        <Share size={20} className="text-black" />
                      </button>

                      {event.isPast || event.status !== "open" ? (
                        <button
                          disabled
                          className="w-full md:w-[180px] py-3 bg-[#30364199] text-white rounded-xl font-bold cursor-not-allowed text-center"
                        >
                          Registration Closed
                        </button>
                      ) : (
                        <a
                          href={event.lumaUrl || "#"}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full md:w-[180px] py-3 bg-[#002C19] text-white rounded-xl font-bold text-center"
                        >
                          Register
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 border border-gray-100 rounded-xl bg-white text-left flex flex-col justify-center min-h-[180px]">
              <h3 className="text-2xl font-normal text-black mb-4">
                No events for now
              </h3>
              <p className="text-[#495565]">Stay tuned for upcoming events</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
