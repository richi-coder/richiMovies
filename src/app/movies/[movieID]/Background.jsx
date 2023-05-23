import { Suspense } from "react"
import Loading from "../loading"
import Image from "next/image"

function Background({ backgroundURL }) {
  return (
    <Suspense fallback={<Loading />}>
    <div
        className='fixed h-screen w-screen -z-10 duration-500'
        // style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundURL})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}
    >
        <Image 
            src={`https://image.tmdb.org/t/p/original${backgroundURL}`}
            alt={backgroundURL}
            className='-z-10 fixed w-screen'
            width={1500}
            height={750}
        />
        <div className='h-full w-full bg-gradient-to-r from-black from-[15vw] sm:from-[10vw] via-transparent via-[80vw] to-transparent to-[50vw] sm:to-[40vw]'></div> 
        {/* This is decoration */}
    </div>
    </Suspense>
  )
}

export default Background
