import { fetchSpecificProductionTrailers } from "@/services/BackgroundService";
import StreamingWrapper from "./StreamingWrapper";

async function StreamingPage({ params }) {
  const res = await fetchSpecificProductionTrailers(params.productionID, params.productionType);
  const videoKeys = res.results.length > 0 ? res.results.map(result => result.key) : [null];
  const dataToWrapper = {
    videoKeys,
    params
  }
  
  return (
      <StreamingWrapper dataToWrapper={dataToWrapper} />
  )
}

export default StreamingPage