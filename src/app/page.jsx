import { Limelight } from 'next/font/google'
import Link from 'next/link'
import HomePosters from '../components/HomePosters'

export const limelight = Limelight({subsets: ['latin'], weight: '400'})

export default function Home() {
  return (
    <main>
      <div className="fixed bottom-0 translate-y-52 sm:translate-y-24 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-y-12 sm:gap-y-16 overflow-clip w-screen h-fit">
          <h1 className={`${limelight.className} text-3xl sm:text-6xl animate-fade-up opacity-0`} style={{animationDelay: 0, animationFillMode: 'forwards'}}>richiTrailers</h1>
          <div className='flex flex-col sm:flex-row items-center gap-y-5 gap-x-10 h-fit animate-fade-up opacity-0' style={{animationDelay: '0.15s', animationFillMode: 'forwards'}}>
            <Link href='/productions'>
                <button className='bg-[rgb(236,72,153)] hover:bg-[rgb(266,102,183)] sm:hover:translate-y-2 px-6 py-4 text-white font-bold text-lg sm:text-xl transition-all'>
                    GO WATCHING
                </button>
            </Link>
            <Link href='/admin'>
                <button className='border border-[rgb(236,72,153)] hover:border-none sm:hover:translate-y-2 px-6 py-4 text-white rounded-md hover:bg-slate-100 hover:text-slate-800 text-lg sm:text-xl transition-all'>
                    ADMIN PANEL
                </button>
            </Link>
          </div>
          <HomePosters />
      </div>
      
    </main>
  )
}
