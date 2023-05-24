import { fetchSpecificMovie } from "@/app/services/BackgroundService";
import Description from "./Description";
import Background from "./Background";
import Suggestions from "./Suggestions";
import Details from "./Details";

async function MoviePage({ params }) {
    const data = await fetchSpecificMovie(params.movieID)
    const backgroundURL = data.backdrop_path || data.poster_path;
    
  return (
    <div className='flex flex-col'>
      <Background backgroundURL={backgroundURL} />
      <Description data={data} movieID={params.movieID} />
      <Details data={data} />
      <Suggestions />
    </div>
  );
}

export default MoviePage;
