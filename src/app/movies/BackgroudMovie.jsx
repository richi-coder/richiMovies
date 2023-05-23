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
        className='fixed h-screen w-screen -z-10 duration-500'
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${url})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}
    >
        <div className='h-full w-full bg-gradient-to-r from-black from-[15vw] sm:from-[10vw] via-transparent via-[80vw] to-transparent to-[50vw] sm:to-[40vw]'></div>
    </div>
    </Suspense>
    </>
  )
}

export default BackgroudMovie