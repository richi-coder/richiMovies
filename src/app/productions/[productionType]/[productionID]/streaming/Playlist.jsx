import NextMovie from "./NextMovie"

function Playlist({ videoKeys, selectVideo, index }) {
    const movies = videoKeys.map(videoKey => ({
        id: videoKey,
        poster_path: videoKey
    }))
    

  return (
    <>
    {
      videoKeys[0] ?
      <div className='w-full'>
        <ul className="flex flex-row flex-wrap sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 h-full md:gap-x-16 lg:gap-x-0 gap-y-5 py-10 px-2">
        {
        
        videoKeys.map((videoKey, ind) => <NextMovie
                                              key={videoKey}
                                              videoKey={videoKey}
                                              selectVideo={selectVideo} 
                                              ind={ind}
                                              selected={index === ind ? true : false}
                                              />)
        
        }
        </ul>
      </div> :
      null
      }
    </>
  )
}

export default Playlist