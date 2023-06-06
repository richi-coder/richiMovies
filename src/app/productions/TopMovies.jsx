'use client'
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { TopMoviesContext } from "./TopContext";

function TopMovies() {
  const { topMoviesList, index } = useContext(TopMoviesContext);
  const { title, id, overview} = topMoviesList[index];
  // const [animationClassname, setAnimationClassname] = useState('')

  useEffect(() => {
      // if (animationClassname === 'animate-fade-up') setAnimationClassname('')
      // else setAnimationClassname('animate-fade-up')
  }, [title])

  return (
  <div className={`w-full h-[60vh] sm:h-[60vh] md:h-[50vh] lg:h-[70vh] px-12 md:px-24 pb-5 flex flex-col items-start justify-end gap-8 `}>
      <h2 className="font-bold -mb-4 text-3xl md:text-5xl transition-all duration-500 animate-fade-up opacity-0" style={{animationDelay: 0, animationFillMode: 'forwards'}}>{title}</h2>
      <p className="w-full md:w-1/2 animate-fade-up opacity-0" style={{animationDelay: '0.25s', animationFillMode: 'forwards'}}>
        {`${overview.slice(0,74)} . . .`}
      </p>
      <Link
        href={`/productions/movie/${id}`}
        className="font-bold px-6 py-4 bg-blue-600 animate-fade-up opacity-0" style={{animationDelay: '0.50s', animationFillMode: 'forwards'}}>
        WATCH NOW
      </Link>
    </div>
  );
}

export default TopMovies;