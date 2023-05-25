import { fetchCategoriesMovies, fetchCategoriesSeries, fetchData } from "../services/BackgroundService";
import ClientCategory from "./ClientCategory";

async function CategorySeries({category}) {
    const seriesData = await fetchCategoriesSeries(category)
    const data = {
        moviesData: seriesData,
        category,
        productionType: 'tv'
    }

  return (
    <ClientCategory data={data} />
  );
}

export default CategorySeries;
