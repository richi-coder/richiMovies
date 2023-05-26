'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaList } from "react-icons/fa";
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/navigation';

function MobileHeader({ font }) {
    const [backgroundScrollClass, setBackgroundScrollClass] = useState('backdrop-blur-0 bg-transparent')
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? 
                    setBackgroundScrollClass('backdrop-blur bg-[rgba(0,0,0,0.7)]') :
                    setBackgroundScrollClass('backdrop-blur-0 bg-transparent')
        }) 
    }, [])

    const navigateMobileMenu = (path) => {
        router.push(path)
        setTimeout(() => {
            showMobileMenu()
        }, 300);
    }

    const showMobileMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true)
        showMenu ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'clip'
    }
    
    
  return (
    <div className={`sm:hidden flex flex-row w-full h-[7vh] transition-all duration-500 text-xl ${backgroundScrollClass}`}>
        <div className='flex flex-row w-full h-full items-center pl-8 gap-5'>
            <button onClick={showMobileMenu}><FaList /></button>
            <Link href={'/productions'}>
                <h1 className={`${font.className}`}>richiTrailers</h1>
            </Link>
            {
                showMenu ?
                <MobileMenu showMobileMenu={showMobileMenu} font={font} navigateMobileMenu={navigateMobileMenu} /> :
                null
            }
        </div>
    </div>
  )
}

export default MobileHeader