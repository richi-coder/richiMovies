'use client'
import { fetchSuggestions } from '@/app/services/ClientService'
import { Suspense, useEffect, useRef, useState } from 'react'
import ClientCategory from '../../ClientCategory'

function Suggestions() {
    const [suggestedMovies, setSuggestedMovies] = useState(null);
    const suggestionsRef = useRef();
    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', checkScroll)
    }, [])

    const checkScroll = () => {
      const yPosition = suggestionsRef.current.getBoundingClientRect().top - window.innerHeight;
      if (dataFetched === false) {
        if (yPosition < 150) {
            fetchSuggestions().then(res => {
                  setSuggestedMovies(res.data)
            })
            window.removeEventListener("scroll", checkScroll);
        }
        setDataFetched(true)
      }
    }
    
  return (
    <div ref={suggestionsRef} className='w-full bg-black py-12 sm:py-24'>
      <Suspense fallback={<></>}>
          <>
          {
              suggestedMovies ?
              <div>
                  <p className='text-3xl pl-12 sm:pl-24 font-bold mb-16'>Suggestions</p>
                  <ClientCategory data={{moviesData: suggestedMovies, category: 'TRENDING'}} />
              </div> :
              null
          }
          </>
      </Suspense>
    </div>
    
  )
}

export default Suggestions