'use client'
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { TopMoviesContext } from "./TopContext";

function TopMovies() {
  const { title, overview } = useContext(TopMoviesContext);
  const [animationClassname, setAnimationClassname] = useState('')

  useEffect(() => {
      if (animationClassname === 'animate-fade-up') setAnimationClassname('')
      else setAnimationClassname('animate-fade-up')
  }, [title])
  

  return (
    <div className={`w-full h-[60vh] sm:h-[70vh] bg-gradient-to-t from-black from-15% to-transparent to-30% sm:bg-transparent px-12 sm:px-24 pb-5 flex flex-col items-start justify-end gap-8 ${animationClassname}`}>
      <h2 className="font-bold -mb-4 text-3xl sm:text-5xl transition-all duration-500">{title}</h2>
      <p className="w-full sm:w-1/2">
        {overview.slice(0,100)}
      </p>
      <Link
        href={"/productions"}
        className="font-bold px-6 py-4 bg-blue-600">
        WATCH NOW
      </Link>
    </div>
  );
}

export default TopMovies;
