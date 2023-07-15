'use client'

import ResultProduction from "@/components/ResultProduction";

export default function ListResults({ searchedProductions = [] }) {
  return (
    <ul className='w-full sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 h-full md:gap-x-16 lg:gap-x-0 gap-y-5 py-10 px-2'>
      {
        searchedProductions.map((searchedProduction) => (
          <ResultProduction
            key={searchedProduction.id+searchedProduction.media_type}
            searchedProduction={searchedProduction}
          />
        ))
      }
    </ul>
  )
}