import Link from "next/link"
import ProductionCategory from "./ProductionCategory"

function ProductionsCategory({ moviesData, productionType }) {
  return (
    <>
        {
            moviesData.results.map((movie) => (
                <li key={movie.id} className='w-44 h-fit overflow-hidden'>
                    <Link href={`/productions/${movie.media_type || productionType}/${movie.id}`} >
                        <ProductionCategory movie={movie} />
                    </Link>
                </li>
                ))
        }
    </>
  )
}

export default ProductionsCategory