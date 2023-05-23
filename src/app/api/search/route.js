import { NextResponse } from "next/server";
// SEARCH API
export async function GET (request) {
    const query = request.nextUrl.searchParams.get('query');
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`;
    const res = await fetch(url);
    const data = await res.json()
    return NextResponse.json({data})
} 