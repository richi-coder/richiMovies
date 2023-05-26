import Link from "next/link"
import { FaSearch } from "react-icons/fa"

function MobileMenu({ showMobileMenu, font, navigateMobileMenu }) {

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black transition-all animate-fade-up'>
        <div className='flex flex-col items-center w-screen h-screen top-0 left-0'>
            <button onClick={showMobileMenu} className='font-bold text-2xl w-full py-8 text-left px-6'>
                X
            </button>
            <div className='flex flex-col items-center w-full gap-5'>
                <button
                    onClick={() => navigateMobileMenu('/productions')}>
                    <h1 className={`text-2xl ${font.className}`}>richiTrailers</h1>
                </button>
                <button 
                    onClick={() => navigateMobileMenu('/search')}
                    className="w-full bg-[rgb(24,24,27)] text-center">
                    <div className='flex flex-row items-center justify-center gap-3 py-5'>
                        Search <FaSearch />
                    </div>
                </button>
                <button 
                    onClick={() => navigateMobileMenu('/')}
                    className="w-full">Home</button>
                <button
                    onClick={() => navigateMobileMenu('/productions/movie')}
                    className="w-full">
                    Movies
                </button>
                <button
                    onClick={() => navigateMobileMenu('/productions/tv')}
                    className="w-full">
                    Series
                </button>
                <button className="w-full">Account</button>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu