'use client'
import Link from 'next/link';
import { useState } from 'react';
import YouTube from 'react-youtube';

function YoutubeClient({ videoKeys, params }) {
    const [index, setIndex] = useState(0);
    const width = 1000;
    const height = width * 9 / 16;


    const opts = {
        height,
        width,
        playerVars: {
          autoplay: 1,
        },
      }

    const onPlayerReady = (e) => {
        e.target.playVideo()
    }

    function videoEnded() {
        if (index === videoKeys.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

  return (
    <div className='w-full flex flex-col items-center'>
      {
        videoKeys[0] ?
      <YouTube
          videoId={videoKeys[index]}                  // defaults -> ''
          // id={string}                       // defaults -> ''
          className='pt-20'                // defaults -> ''
          // iframeClassName={string}          // defaults -> ''
          // style={object}                    // defaults -> {}
          // title={string}                    // defaults -> ''
          // loading={string}                  // defaults -> undefined
          opts={opts}                        // defaults -> {}
          onReady={onPlayerReady}                    // defaults -> noop
          onPlay={() => console.log('PLYAAAAING')}                     // defaults -> noop
          // onPause={func}                    // defaults -> noop
          onEnd={videoEnded}                      // defaults -> noop
          // onError={func}                    // defaults -> noop
          // onStateChange={func}              // defaults -> noop
          // onPlaybackRateChange={func}       // defaults -> noop
          // onPlaybackQualityChange={func}    // defaults -> noop
        /> :
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