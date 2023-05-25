import Link from "next/link"
import { FaSearch } from "react-icons/fa"

function MobileMenu({ showMobileMenu, font }) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black transition-all animate-fade-up'>
        <div className='flex flex-col items-center w-screen h-screen top-0 left-0'>
            <button onClick={showMobileMenu} className='font-bold text-2xl w-full py-8 text-left px-4'>
                {/* <FaCrosshairs
                className='bg-black textwhite'
                /> */}
                X
            </button>
            <div className='flex flex-col items-center w-full'>
                <Link href={'/productions'}>
                    <h1 className={`${font.className}`}>richiTrailers</h1>
                </Link>
                <div className="w-full bg-[rgb(24,24,27)]">Search <FaSearch /></div>
                <div className="w-full">ACCOUNT</div>
                <div className="w-full">HOME</div>
                <div className="w-full">MOVIES</div>
                <div className="w-full">SERIES</div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu