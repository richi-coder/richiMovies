// 'use client'
// import React, { useContext } from 'react'
// import { getPlaiceholder } from 'plaiceholder';
// import { TopMoviesContext } from './TopContext';
import Image from 'next/image';


async function BackgroudMovie({ url }) {
  // const { url } = useContext(TopMoviesContext);
    // const src = `https://image.tmdb.org/t/p/original${url}`;
    // const options = {
    //     size: 10
    // }
    // const { base64, img } = await getPlaiceholder(src, options)
  
  return (
    // <>
    // <div
    //     className='fixed top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 h-[50vh] aspect-video sm:w-full sm:aspect-video sm:h-auto md:h-screen md:w-screen lg:w-screen lg:h-screen -z-10 duration-500 bg-no-repeat bg-contain bg-center md:bg-right-top'
    //     style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${url})`}}
    // >
    //     <div className='h-full w-full bg-gradient-to-r from-black from-[15%] md:from-[3%] to-transparent to-100% md:to-100%'></div>
    // </div>
    // </>
    <div
        className='fixed top-0 left-1/2 -translate-x-1/3 sm:left-0 sm:translate-x-0 h-auto w-[200vw] sm:h-auto sm:w-screen -z-10 duration-500'
    >
            <Image 
                src={`https://image.tmdb.org/t/p/original${url}`}
                width={1500}
                height={950}
                className='-z-10 transition-all duration-500 w-[150vw]'
                alt={url}
                placeholder='empty'
                // blurDataURL={base64}
                // {...img}
            />
            <div className='h-full w-full bg-gradient-to-t from-black from-5% sm:from-2% via-transparent via-80% to-transparent to-50% sm:to-40% fixed top-0 left-0 z-40'></div> 
            <div className='h-full w-full bg-gradient-to-r from-black from-[15vw] sm:from-[10vw] via-transparent via-[80vw] to-transparent to-[50vw] sm:to-[40vw] fixed top-0 left-0 z-50'></div> 
            {/* This is decoration */}
    </div>
  )
}

export default BackgroudMovie