'use client'
import Link from "next/link";
import { useState } from "react"

function Description({ data, movieID }) {
    const shortDescription = data.overview ? `${data.overview.slice(0,127)} . . .` : 'No description available!';
    const longDescription = data.overview ? data.overview : 'No description available!';
    const [description, setDescription] = useState(shortDescription)

    const changeVisibility = () => {
        description === shortDescription ? 
                setDescription(longDescription) : 
                setDescription(shortDescription)
    }

  return (
    <div className={`w-full h-[60vh] px-24 pb-10 flex flex-col items-start justify-end gap-8`}>
        <h2 className="font-bold text-5xl transition-all duration-500">
            {data.title}
        </h2>
        <p className="w-1/2 transition-all h-fit text-left">
            {description}
        </p>
        <button onClick={changeVisibility}>
            View more
        </button>
        <Link
            href={`/movies/${movieID}/streaming`}
            className="font-bold px-6 py-4 bg-blue-600">
            TRAILER
        </Link>
    </div>
  )
}

export default Description