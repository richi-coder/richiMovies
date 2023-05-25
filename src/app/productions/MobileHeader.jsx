'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaHamburger, FaList, FaSearch } from "react-icons/fa";
import MobileMenu from './MobileMenu';

function MobileHeader({ font }) {
    const [backgroundScrollClass, setBackgroundScrollClass] = useState('backdrop-blur-0 bg-transparent')
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? 
                    setBackgroundScrollClass('backdrop-blur bg-[rgba(0,0,0,0.7)]') :
                    setBackgroundScrollClass('backdrop-blur-0 bg-transparent')
        }) 
    }, [])

    const showMobileMenu = () => {
        setShowMenu(!showMenu)
    }
    
    
  return (
    <div className={`sm:hidden flex flex-row w-full h-[10vh] transition-all duration-500 text-xl ${backgroundScrollClass}`}>
        <div className='flex flex-row w-full h-full items-center pl-8 gap-5'>
            <button onClick={showMobileMenu}><FaList /></button>
            <Link href={'/productions'}>
                <h1 className={`${font.className}`}>richiTrailers</h1>
            </Link>
            {
                showMenu ?
                <MobileMenu showMobileMenu={showMobileMenu} font={font} /> :
                null
            }
        </div>
    </div>
  )
}

export default MobileHeader