import React from 'react'
import Link from 'next/link'

function DesktopHeader() {
  return (
    <div className='flex flex-row w-full h-[6vh]'>
        <div className='flex flex-row w-3/4 h-full items-center pl-10'>
            <Link href={'/productions'}>
                LOGO
            </Link>
            <Link href={'/'}>
                HOME
            </Link>
            <Link href={'/admin'}>
                ADMIN
            </Link>
            <Link href={'/search'}>
                SEARCH
            </Link>
        </div>
        <div className='w-1/4 h-full flex flex-row items-center justify-end pr-10'>
            Account
        </div>
    </div>
  )
}

export default DesktopHeader