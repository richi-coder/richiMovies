import Image from "next/image";
import { fetchHomePosters } from "./services/OnDemandService"

async function HomePosters() {
    // fetching posters
    const data = await fetchHomePosters();
    const homePosters = data.results;

  return (
    <div className="w-fit gap-x-20 grid lg:mb-0 lg:grid-cols-4 animate-fade-up mx-auto content-center">
        {
            homePosters.slice(0,4).map(homePoster => 
                <Image
                src={`https://image.tmdb.org/t/p/w500${homePoster.poster_path}`}
                width={250}
                height={300}
                alt={homePoster.overview}
                />
            )
        }
    </div>

  )
}

export default HomePosters