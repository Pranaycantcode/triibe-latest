import { NextResponse } from "next/server";

async function getAllGuests(eventId: string, apiKey: string) {
  let allGuests: any[] = [];
  let cursor: string | null = null;
  let hasMore = true;

  try {
    while (hasMore) {
      const params = new URLSearchParams({
        event_id: eventId,
        approval_status: "approved",
        pagination_limit: "100",
      });
      if (cursor) params.append("pagination_cursor", cursor);

      const res = await fetch(
        `https://public-api.luma.com/v1/event/get-guests?${params.toString()}`,
        {
          headers: {
            accept: "application/json",
            "x-luma-api-key": apiKey,
          },
        },
      );

      if (!res.ok)
        throw new Error(`Failed to fetch guests for event ${eventId}`);

      const data = await res.json();
      allGuests = allGuests.concat(data.entries ?? []);

      cursor = data.next_cursor ?? null;
      hasMore = data.has_more === true && cursor !== null;
    }

    return allGuests.length;
  } catch {
    return null; // if guest list is hidden or inaccessible
  }
}

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
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Luma API Error" },
        { status: res.status },
      );
    }

    const data = await res.json();
    const publicEntries = data.entries.filter(
      (entry: any) => entry.event.visibility === "public",
    );

    const entriesWithGuestCounts = await Promise.all(
      publicEntries.map(async (entry: any) => {
        const guestCount = await getAllGuests(entry.event.api_id, apiKey);
        return { ...entry, guestCount };
      }),
    );

    return NextResponse.json({ ...data, entries: entriesWithGuestCounts });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
