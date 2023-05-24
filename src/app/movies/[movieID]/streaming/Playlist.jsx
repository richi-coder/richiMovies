import SearchResults from "@/app/search/SearchResults"
import Image from "next/image"
import NextMovie from "./NextMovie"

function Playlist({ videoKeys }) {
    const movies = videoKeys.map(videoKey => ({
        id: videoKey,
        poster_path: videoKey
    }))
    

  return (
    <div className='w-full'>
        <ul className="flex flex-row flex-wrap sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 h-full md:gap-x-16 lg:gap-x-0 gap-y-5 py-10 px-2">
        {
        videoKeys ?
        videoKeys.map(videoKey => <NextMovie key={videoKey} videoKey={videoKey} />) :
        null
        }
        </ul>
    </div>
  )
}

export default Playlist