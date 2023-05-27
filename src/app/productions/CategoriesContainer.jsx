import React from 'react'
import TopMovies from './TopMovies'
import CategoryMovie from './CategoryMovie'
import CategorySeries from './CategorySeries';

const moviesCategories = ['now_playing', 'popular', 'top_rated', 'upcoming'];
const seriesCategories = ['popular', 'top_rated', 'airing_today']

function CategoriesContainer() {
  return (
    <div className="h-full w-full flex flex-col items-start bg-gradient-to-b from-transparent from-5% sm:from-0% md:from-0% lg:from-0% md:via-black md:via-[18%] lg:via-25% to-black to-15% sm:to-[95vh] md:to-black md:to-[100%] lg:to-[100%] overflow-hidden">
      <TopMovies />
      <h3
        className='text-3xl font-bold px-12 sm:px-28 py-5 text-slate-200 animate-fade-up opacity-0'
        style={{animationDelay: '0.75s', animationFillMode: 'forwards'}} >
        Movies
      </h3>
      {
        moviesCategories.map(category => <CategoryMovie key={category} category={category} />)
      }
      <h3
        className='text-3xl font-bold px-12 sm:px-28 py-5 text-slate-200 animate-fade-up opacity-0'
          style={{animationDelay: '1s', animationFillMode: 'forwards'}} >
        Series
      </h3>
      {
        seriesCategories.map(category => <CategorySeries key={category} category={category} />)
      }
    </div>
  )
}

export default CategoriesContainer