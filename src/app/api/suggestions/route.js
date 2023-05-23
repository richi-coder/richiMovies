import { NextResponse } from "next/server";
// SUGGESTIONS API
export async function GET () {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    }
    const res = await fetch(url, options);
    const data = await res.json()
    return NextResponse.json({data})
} 