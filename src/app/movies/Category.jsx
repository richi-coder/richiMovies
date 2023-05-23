import { fetchCategoriesMovies, fetchData } from "../services/BackgroundService";
import ClientCategory from "./ClientCategory";

async function Category({category}) {
    const moviesData = await fetchCategoriesMovies(category)
    const data = {
        moviesData,
        category
    }

  return (
    <ClientCategory data={data} />
  );
}

export default Category;
