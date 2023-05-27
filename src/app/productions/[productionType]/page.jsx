'use client'
import SearchResults from "@/app/search/SearchResults";
import { fetchProductionsPage } from "@/app/services/ClientService";
import { useEffect, useState } from "react";

async function ProductionTypePage({ params }) {
  const [productions, setProductions] = useState(null)
  

  useEffect(() => {
    // fetchProductionsPage(params.productionType)
    //       .then(res => {
    //         const data = res.results;
    //         setProductions(data.map(item => ({
    //             ...item,
    //             media_type: params.productionType
    //           })))
    //       })
  }, [])
  

  return (
    <div className='w-full flex flex-col pt-20'>
      <h3
        className='text-3xl font-bold px-12 sm:px-28 py-5 text-slate-200 animate-fade-up opacity-0'
        style={{animationDelay: 0, animationFillMode: 'forwards'}} >
          {params.productionType === 'movie' ? 'Movies' : 'Series'}
      </h3>
      <hr className='mx-24 border-[rgb(236,72,153)]' />
      <>
      {
        productions ?
        <SearchResults searchedMovies={productions} /> :
        null
      }
      </>
    </div>
  )
}

export default ProductionTypePage

export const dynamicParams = false; 

export const  generateStaticParams = () => {
  return [{productionType: 'movie'}, {productionType: 'tv'}]
}