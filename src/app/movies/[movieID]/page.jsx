import { fetchSpecificMovie } from "@/app/services/BackgroundService";
import Description from "./Description";
import Background from "./Background";
import Suggestions from "./Suggestions";

async function MoviePage({ params }) {
    const data = await fetchSpecificMovie(params.movieID)
    const backgroundURL = data.backdrop_path || data.poster_path;
  return (
    <>
      <Background backgroundURL={backgroundURL} />
      <Description data={data} movieID={params.movieID} />
      <Suggestions />
    </>
  );
}

export default MoviePage;
