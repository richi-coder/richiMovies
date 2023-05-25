import React from 'react'
import ResultMovie from './ResultMovie'

function SearchResults({ searchedMovies }) {
  console.log(searchedMovies, 'Search Results');
  return (
    <div className='w-full'>
    <ul className="flex flex-row flex-wrap sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 h-full md:gap-x-16 lg:gap-x-0 gap-y-5 py-10 px-2">
    {
      searchedMovies ?
      searchedMovies.map(searchedMovie => <ResultMovie key={searchedMovie.id} searchedMovie={searchedMovie} />) :
      null
    }
    </ul>
    </div>
  )
}

export default SearchResults