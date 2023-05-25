'use client'
import { useEffect, useState } from 'react'
import DesktopHeader from './DesktopHeader'
import { Limelight } from 'next/font/google'
import MobileHeader from './MobileHeader'

const limelight = Limelight({subsets: ['latin'], weight: '400'})

function Header() {
  const [showScroll, setShowScroll] = useState('')
  let direction = 0;

  useEffect(() => {
    // direction = window.pageYOffset
    window.addEventListener('scroll', (e) => {
      window.scrollY > direction ? setShowScroll('-translate-y-full') : setShowScroll('')
      direction = window.scrollY
    })
  }, [])
  

  return (
    <div className={`fixed top-0 left-0 w-full h-fit text-white z-50 ${showScroll} transition-all duration-500`}>
        <DesktopHeader font={limelight} />
        <MobileHeader font={limelight} />
    </div>
  )
}

export default Header