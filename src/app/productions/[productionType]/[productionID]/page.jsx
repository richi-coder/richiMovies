import { fetchSpecificMovie } from "@/app/services/BackgroundService";
import Description from "./Description";
import Background from "./Background";
import Suggestions from "./Suggestions";
import Details from "./Details";

async function ProductionPage({ params }) {
    const data = await fetchSpecificMovie(params.productionID, params.productionType)
    const backgroundURL = data.backdrop_path || data.poster_path;
    
  return (
    <div className='flex flex-col'>
      <Background backgroundURL={backgroundURL} />
      <Description data={data} params={params} />
      <Details data={data} />
      <Suggestions params={params} />
    </div>
  );
}

export default ProductionPage;
