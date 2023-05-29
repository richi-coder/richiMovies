import React from 'react'

function Footer() {
  return (
    <div className='bg-black px-12 sm:px-24 py-20'>
        <h5 className='pb-8 text-lg font-bold'>Credits</h5>
        <p>TMDB API usage</p>
        <a href="https://www.themoviedb.org" target='_blank'>The Movie Database Page</a>
        <div className='text-xs text-gray-500'>This product uses the TMDB API but is not endorsed or certified by TMDB.</div>
        <div className='text-xs text-gray-500'>This is a demo app with no commercial purposes. Developed by richiCoder.</div>
    </div>
  )
}

export default Footer