'use client'
import SearchResults from '@/app/search/SearchResults'
import { fetchSuggestions } from '@/app/services/ClientService'
import { useEffect, useState } from 'react'
import ClientCategory from '../ClientCategory'

function Suggestions() {
    const [suggestedMovies, setSuggestedMovies] = useState(null)

    useEffect(() => {
        fetchSuggestions().then(res => setSuggestedMovies(res.data))
    }, [])
    
  return (
    <div className='w-full bg-black py-24'>
    {
        suggestedMovies ?
        <div>
            <p className='text-3xl pl-24 font-bold mb-16'>Suggestions</p>
            <ClientCategory data={{moviesData: suggestedMovies, category: 'TRENDING'}} />
        </div> :
        null
    }
    </div>
  )
}

export default Suggestions