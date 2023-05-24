import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import FallbackMovie from "./FallbackMovie";

function ResultMovie({ searchedMovie: movie }) {
  return (
    <li className="w-44 h-fit animate-fade-up overflow-hidden mx-auto">
      <Link href={`/productions/${movie.media_type}/${movie.id}`} className='h-fit'>
    {
        movie.poster_path ?
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={200}
          height={300}
          alt={movie.id}
          placeholder="empty"
          className="transition-transform duration-200 hover:scale-105"
        /> :
        <FallbackMovie movie={movie} />
        }
      </Link>
    </li>
  );
}

export default ResultMovie;
