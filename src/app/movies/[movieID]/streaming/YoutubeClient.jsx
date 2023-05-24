'use client'
import { useState } from 'react';
import YouTube from 'react-youtube';

function YoutubeClient({ videoKeys }) {
    const [index, setIndex] = useState(0);
    const width = 1200;
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
    <YouTube
        videoId={videoKeys[index]}                  // defaults -> ''
        // id={string}                       // defaults -> ''
        className=''                // defaults -> ''
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
      />
    </div>
  )
}

export default YoutubeClient