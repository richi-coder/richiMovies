'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

function YoutubeClient({ videoKeys, params, videoEnded, index }) {
    const [mount, setMount] = useState(false)
    const [opts, setOpts] = useState({
        width: 1000,
        height: 1000 * 9 / 16,
        playerVars: {
          autoplay: 1,
        },
    })
    
    const onPlayerReady = (e) => {
      e.target.playVideo()
    }
    
    useEffect(() => {
      if (window.innerWidth < 1000) {
        setOpts({
          width: window.innerWidth,
          height: window.innerWidth * 9 / 16,
          playerVars: {
            autoplay: 1,
          },
        })
      }
      setMount(true)
    }, [])
    
    
  return (
    <div className='w-full flex flex-col items-center'>
      {
        videoKeys[0] ?
        <>
      {
        mount ?
        <YouTube
          videoId={videoKeys[index]}                  // defaults -> ''
          // id={string}                       // defaults -> ''
          className='pt-20'                // defaults -> ''
          // iframeClassName={string}          // defaults -> ''
          // style={object}                    // defaults -> {}
          // title={string}                    // defaults -> ''
          // loading={string}                  // defaults -> undefined
          opts={opts}                        // defaults -> {}
          onReady={mount ? onPlayerReady : null}                    // defaults -> noop
          onPlay={() => console.log('PLYAAAAING')}                     // defaults -> noop
          // onPause={func}                    // defaults -> noop
          onEnd={videoEnded}                      // defaults -> noop
          // onError={func}                    // defaults -> noop
          // onStateChange={func}              // defaults -> noop
          // onPlaybackRateChange={func}       // defaults -> noop
          // onPlaybackQualityChange={func}    // defaults -> noop
        /> :
        null
        }
        </> :
        <div className='h-screen w-screen relative text-5xl'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10'>
            <p>No clips available . . .</p>
            <Link 
              href={`/productions/${params.productionType}/${params.productionID}`}
              >
              <button className='bg-slate-500 px-6 py-4 text-white font-bold rounded-md hover:bg-slate-100 hover:text-slate-800 text-3xl transition-all'>
              GO BACK
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default YoutubeClient