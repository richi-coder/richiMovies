import { Suspense } from "react"
import Loading from "../loading"
import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"

async function Background({ backgroundURL }) {
    const src = `https://image.tmdb.org/t/p/original${backgroundURL}`;
    const options = {
        size: 10
    }
    const { base64, img } = await getPlaiceholder(src, options)

  return (
    <Suspense fallback={<Loading />}>
    <div
        className='fixed top-0 left-0 h-screen w-screen -z-10 duration-500'
    >
            <Image 
                // src={`https://image.tmdb.org/t/p/original${backgroundURL}`}
                // width={1500}
                // height={750}
                className='fixed -z-10 w-screen transition-all'
                alt={backgroundURL}
                placeholder='blur'
                blurDataURL={base64}
                {...img}
            />
            
        <div className='h-full w-full bg-gradient-to-r from-black from-[15vw] sm:from-[10vw] via-transparent via-[80vw] to-transparent to-[50vw] sm:to-[40vw] fixed z-50'></div> 
        <div className='h-[10vh] w-full bg-gradient-to-b from-black from-0% to-transparent to-[50vw] absolute bottom-0 z-50'></div> 
        
        {/* This is decoration */}
    </div>
    </Suspense>
  )
}

export default Background
