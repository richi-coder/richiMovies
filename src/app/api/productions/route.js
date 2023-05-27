import { NextResponse } from "next/server";
// PRODUCTIONS API
export async function GET (request) {
    const mediatype = request.nextUrl.searchParams.get('mediatype');
    const url = `https://api.themoviedb.org/3/discover/${mediatype}?page=1&language=en-US&primary_release_year=2023&sort_by=popularity.desc`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
      };
    const res = await fetch(url, options);
    const data = await res.json()
    return NextResponse.json(data)
} 