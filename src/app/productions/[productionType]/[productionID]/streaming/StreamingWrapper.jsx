'use client'
import React, { useState } from 'react'
import YoutubeClient from "./YoutubeClient";
import Playlist from "./Playlist";

function StreamingWrapper({ dataToWrapper }) {
  const [index, setIndex] = useState(0)
  const { videoKeys, params } = dataToWrapper;

  const selectVideo = (indexKey) => {
    setIndex(indexKey)
  }

  const videoEnded = () => {
    if (index === videoKeys.length - 1) {
        setIndex(0)
        return
    }
    setIndex(index + 1)
}


return (
    <div className='w-full flex flex-col'>
      <YoutubeClient videoKeys={videoKeys} params={params} videoEnded={videoEnded} index={index} />
      <Playlist videoKeys={videoKeys} selectVideo={selectVideo} index={index} />
    </div>
  )
}

export default StreamingWrapper