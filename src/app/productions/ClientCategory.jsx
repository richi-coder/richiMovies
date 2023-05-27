'use client'

import { useRef } from "react";
import Button from "./Button"
import Image from "next/image";
import Link from "next/link";

function ClientCategory({ data }) {
  console.log(data, 'clientCategory');
  const { moviesData, category, productionType } = data;
  const scrollerRef = useRef();
  return (
    <div className='h-[350px] px-8 sm:px-20 w-full relative animate-fade-up opacity-0' style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            <Button positionClassname={'left-0 translate-x-7 sm:translate-x-14'} scrollerRef={scrollerRef} />
            <Button positionClassname={'right-0 -translate-x-7'} scrollerRef={scrollerRef} />
            <p className='font-bold text-xl mb-4'>
                {category === 'upcoming' ? 'Playing soon' : category === 'top_rated' ? 'Top productions' : category === 'popular' ? 'Popular productions' : category === 'now_playing' ? 'Now playing' : category === 'airing_today' ? 'On the air' : ''}
            </p>

            {/* ScrollerCategory down here */}
            <div ref={scrollerRef}
                className='overflow-x-scroll overflow-y-clip h-full w-full relative'>
                  <ul 
                      className='flex flex-row h-full w-fit gap-x-5'>
                  {
                      moviesData.results.map((movie) => (
                      <li key={movie.id} className='w-44 h-fit overflow-hidden'>
                          <Link href={`/productions/${productionType}/${movie.id}`} >
                          <Image
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          width={200}
                          height={300}
                          alt={movie.id}
                          placeholder="empty"
                          className='transition-transform duration-200 hover:scale-105'
                          />
                          </Link>
                      </li>
                      ))
                  }
                  </ul>
            </div>
    </div>
  )
}

export default ClientCategory