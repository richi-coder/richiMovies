import { fetchTopPageMovies } from "../services/OnDemandService";
import BackgroudMovie from "./BackgroudMovie";
import CategoriesContainer from "./CategoriesContainer";
import TopContext from "./TopContext";

export default async function MoviesPage() {
  const options = ['now_playing', 'upcoming', 'top_rated', 'popular']
  const index = Math.floor(Math.random()*4);
  const moviesData = await fetchTopPageMovies(options[index]);

  const topMoviesList =  moviesData.results.map(movie => ({
    url: movie.poster_path,
    title: movie.original_title,
    overview: movie.overview
  }
  )).slice(0,5);

  return (
    <TopContext topMoviesList={topMoviesList}>
      <BackgroudMovie />
      <CategoriesContainer />
    </TopContext>
  )
}

