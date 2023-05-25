'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

function DesktopHeader({ font }) {
    const [backgroundScrollClass, setBackgroundScrollClass] = useState('backdrop-blur-0 bg-transparent')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? 
                    setBackgroundScrollClass('backdrop-blur bg-[rgba(0,0,0,0.7)]') :
                    setBackgroundScrollClass('backdrop-blur-0 bg-transparent')
        }) 
    }, [])
    
    
  return (
    <div className={`sm:flex sm:flex-row w-full h-[7vh] hidden transition-all duration-500 text-lg ${backgroundScrollClass}`}>
        <div className='flex flex-row w-3/4 h-full items-center pl-24 gap-5'>
            <Link href={'/productions'}>
                <h1 className={`${font.className}`}>richiTrailers</h1>
            </Link>
            <Link href={'/'}>
                <p>Home</p>
            </Link>
            <Link href={'/productions/movie'}>
                Movies
            </Link>
            <Link href={'/productions/tv'}>
                Series
            </Link>
            <Link href={'/search'}>
                <FaSearch />
            </Link>
        </div>
        <div className='w-1/4 h-full flex flex-row items-center justify-end pr-10'>
            Account
        </div>
    </div>
  )
}

export default DesktopHeader