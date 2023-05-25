import React from 'react'
import TopMovies from './TopMovies'
import CategoryMovie from './CategoryMovie'
import CategorySeries from './CategorySeries';

const moviesCategories = ['now_playing', 'popular', 'top_rated', 'upcoming'];
const seriesCategories = ['popular', 'top_rated']

function CategoriesContainer() {
  return (
    <div className="h-full w-full flex flex-col items-start bg-gradient-to-b from-transparent from-0% to-black to-[95vh] overflow-hidden">
      <TopMovies />
      <h3 className='text-3xl font-bold px-28 py-5 text-slate-200'>Movies</h3>
      {
        moviesCategories.map(category => <CategoryMovie key={category} category={category} />)
      }
      <h3 className='text-3xl font-bold px-28 py-5 text-slate-200'>Series</h3>
      {
        seriesCategories.map(category => <CategorySeries key={category} category={category} />)
      }
    </div>
  )
}

export default CategoriesContainer