import Image from "next/image";
import { fetchHomePosters } from "./services/OnDemandService"

async function HomePosters() {
    // fetching posters
    const data = await fetchHomePosters();
    const homePosters = data.results;

  return (
    <div className="w-fit gap-x-1 sm:gap-x-20 gap- grid lg:mb-0 grid-cols-2 lg:grid-cols-4 animate-fade-up mx-auto content-center opacity-0" style={{animationDelay: '0.50s', animationFillMode: 'forwards'}}>
        {
            homePosters.slice(0,4).map((homePoster, i) => 
                <div key={i} className='w-fit sm:overflow-auto sm:h-fit -mb-14'>
                    <Image
                    src={`https://image.tmdb.org/t/p/w500${homePoster.poster_path}`}
                    width={250}
                    height={300}
                    alt={homePoster.overview}
                    />
                </div>
            )
        }
    </div>

  )
}

export default HomePosters