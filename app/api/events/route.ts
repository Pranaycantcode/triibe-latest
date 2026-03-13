import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.LUMA_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API Key missing in .env" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      "https://public-api.luma.com/v1/calendar/list-events",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-luma-api-key": apiKey,
        },
        next: { revalidate: 60 }, // Caches for 1 minute
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Luma API Error" },
        { status: res.status },
      );
    }

    const data = await res.json();
    // const publicEvents = {
    //   ...data,
    //   entries: data.entries.filter(
    //     (entry: any) => entry.event.visibility === "public",
    //   ),
    // };
    // return NextResponse.json(publicEvents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
