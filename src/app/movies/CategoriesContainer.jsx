import React from 'react'
import TopMovies from './TopMovies'
import Category from './Category'

const categories = ['now_playing', 'popular', 'top_rated', 'upcoming'];

function CategoriesContainer() {
  return (
    <div className="h-full w-full flex flex-col items-start bg-gradient-to-b from-transparent from-0% to-black to-[95vh] overflow-hidden">
      <TopMovies />
      {
        categories.map(category => <Category key={category} category={category} />)
      }
    </div>
  )
}

export default CategoriesContainer