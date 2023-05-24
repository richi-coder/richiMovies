'use client'
import Link from "next/link";
import { useState } from "react"

function Description({ data, params }) {
    console.log(data, params, 'Description Client');
    const shortDescription = data.overview ? `${data.overview.slice(0,127)} . . .` : 'No description available!';
    const longDescription = data.overview ? data.overview : 'No description available!';
    const [description, setDescription] = useState(shortDescription)

    const changeVisibility = () => {
        description === shortDescription ? 
                setDescription(longDescription) : 
                setDescription(shortDescription)
    }

  return (
    <div className={`w-full h-[90vh] px-24 pb-6 flex flex-col items-start justify-end gap-8 bg-gradient-to-t from-black from-0% to-transparent to-15%`}>
        <h2 className="font-bold text-3xl sm:text-5xl animate-fade-up">
            {data.title || data.name}
        </h2>
        <p className="w-1/2 h-fit text-left animate-fade-up">
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