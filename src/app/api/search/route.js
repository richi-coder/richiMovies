import { NextResponse } from "next/server";

export async function GET (request) {
    const query = request.nextUrl.searchParams.get('query')
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`);
    const data = await res.json()
    return NextResponse.json({data})
} 