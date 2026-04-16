import { NextResponse } from 'next/server';

export async function GET() {
    // Liyonta Tea Factory Place ID
    const PLACE_ID = "ChIJR3yZ0i9g4ToRVSl0f808wVw";
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

    if (!API_KEY) {
        console.error("Missing GOOGLE_MAPS_API_KEY in environment variables.");
        return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    // Requesting the 'opening_hours' field from Google
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=opening_hours&key=${API_KEY}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Failed to fetch from Google Maps:", error);
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}