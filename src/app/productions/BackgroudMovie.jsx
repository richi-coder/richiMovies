'use client'
import React, { Suspense, useContext, useEffect, useState } from 'react'
import Loading from '../loading'
import { TopMoviesContext } from './TopContext';


function BackgroudMovie() {
  const { url } = useContext(TopMoviesContext);
  
  return (
    <>
    <Suspense fallback={<Loading />}> {/* check later, this is for when the image is not loaded yet */}
    <div
        className='fixed top-0 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 h-[50vh] aspect-video sm:h-screen sm:w-screen -z-10 duration-500 bg-no-repeat bg-contain bg-center sm:bg-center'
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${url})`}}
    >
        <div className='h-full w-full bg-gradient-to-r from-black from-[15vw] sm:from-[10vw] via-transparent via-[80vw] to-transparent to-[50vw] sm:to-[40vw]'></div>
    </div>
    </Suspense>
    </>
  )
}

export default BackgroudMovie