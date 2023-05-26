'use client'
import Link from "next/link";
import { useState } from "react"

function Description({ data, params }) {
    const shortDescription = data.overview ? `${data.overview.slice(0,127)} . . .` : 'No description available!';
    const longDescription = data.overview ? data.overview : 'No description available!';
    const [description, setDescription] = useState(shortDescription)

    const changeVisibility = () => {
        description === shortDescription ? 
                setDescription(longDescription) : 
                setDescription(shortDescription)
    }

  return (
    <div className={`w-full h-[75vh] sm:h-[60vh] md:h-[60vh] lg:h-[90vh] px-10 sm:px-24 pb-6 flex flex-col items-start justify-end gap-4 sm:gap-8 bg-gradient-to-t from-black from-35% sm:from-0% md:from-0% to-transparent to-60% sm:to-15% md:to-50%`}>
        <h2 className="font-bold text-3xl sm:text-5xl animate-fade-up">
            {data.title || data.name}
        </h2>
        <p className="w-full sm:w-1/2 h-fit text-left animate-fade-up translate-x-0 duration-500">
            {description}
        </p>
        <button
            className='animate-fade-up'
            onClick={changeVisibility}>
            View more
        </button>
        <Link
            href={`/productions/${params.productionType}/${params.productionID}/streaming`}
            className='font-bold px-6 py-4 bg-blue-600 animate-fade-up'>
            TRAILERS
        </Link>
    </div>
  )
}

export default Description