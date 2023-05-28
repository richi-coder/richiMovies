import ClientLoader from "@/app/ClientLoader";
import SearchResults from "@/app/search/SearchResults";
import { fetchProductionTypePage } from "@/app/services/BackgroundService";

async function ProductionTypePage({ params }) {
    const res = await fetchProductionTypePage(params.productionType);
    const productions = res.results;

  return (
    <div className='w-full flex flex-col pt-20'>
      <h3
        className='text-3xl font-bold px-12 sm:px-28 py-5 text-slate-200 animate-fade-up opacity-0'
        style={{animationDelay: 0, animationFillMode: 'forwards'}} >
          {params.productionType === 'movie' ? 'Movies' : 'Series'}
      </h3>
      <hr className='mx-24 border-[rgb(236,72,153)]' />
      <>
      <SearchResults searchedMovies={productions} />
      </>
    </div>
  )
}

export default ProductionTypePage

export const dynamicParams = false; 

export const  generateStaticParams = () => {
  return [{productionType: 'movie'}, {productionType: 'tv'}]
}