import Link from "next/link"
import { FaSearch } from "react-icons/fa"

function MobileMenu({ showMobileMenu, font }) {

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black transition-all animate-fade-up'>
        <div className='flex flex-col items-center w-screen h-screen top-0 left-0'>
            <button onClick={showMobileMenu} className='font-bold text-2xl w-full py-8 text-left px-6'>
                {/* <FaCrosshairs
                className='bg-black textwhite'
                /> */}
                X
            </button>
            <div className='flex flex-col items-center w-full gap-5'>
                <Link
                    onClick={showMobileMenu}
                    href={'/productions'}>
                    <h1 className={`text-2xl ${font.className}`}>richiTrailers</h1>
                </Link>
                <Link href={'/search'} className="w-full bg-[rgb(24,24,27)] text-center">
                    <div className='flex flex-row items-center justify-center gap-3 py-5'>
                        Search <FaSearch />
                    </div>
                </Link>
                <div className="w-full">ACCOUNT</div>
                <Link href={'/'} className="w-full">HOME</Link>
                <Link
                    onClick={showMobileMenu}
                    href={'/productions/movie'}
                    className="w-full">
                    MOVIES
                </Link>
                <Link
                    onClick={showMobileMenu}
                    href={'/productions/tv'}
                    className="w-full">
                    SERIES
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu