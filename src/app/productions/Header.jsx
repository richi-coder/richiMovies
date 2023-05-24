import React from 'react'
import DesktopHeader from './DesktopHeader'

function Header() {
  return (
    <div className='fixed top-0 left-0 w-full h-fit text-white'>
        <DesktopHeader />
    </div>
  )
}

export default Header