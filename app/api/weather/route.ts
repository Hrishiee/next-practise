import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const lat = url.searchParams.get('lat') || '19.0760';       // Mumbai default
    const lon = url.searchParams.get('lon') || '72.8777';
    const exclude = url.searchParams.get('exclude') || 'hourly,daily';

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) throw new Error('Missing OpenWeather API key');

    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch weather data');

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
