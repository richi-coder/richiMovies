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
    <div className={`w-full h-[60vh] px-24 pb-10 flex flex-col items-start justify-end gap-8 ${animationClassname}`}>
      <h2 className="font-bold -mb-4 text-5xl transition-all duration-500">{title}</h2>
      <p className="w-1/2">{overview}
      </p>
      <Link
        href={"/movies"}
        className="font-bold px-6 py-4 bg-blue-600">
        WATCH NOW
      </Link>
    </div>
  );
}

export default TopMovies;
