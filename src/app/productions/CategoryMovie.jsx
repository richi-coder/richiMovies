import { fetchCategoriesMovies, fetchData } from "../services/BackgroundService";
import ClientCategory from "./ClientCategory";

async function CategoryMovie({category}) {
    const moviesData = await fetchCategoriesMovies(category)
    const data = {
        moviesData,
        category,
        productionType: 'tv'
    }

  return (
    <ClientCategory data={data} />
  );
}

export default CategoryMovie;
