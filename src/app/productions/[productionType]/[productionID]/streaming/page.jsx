import { fetchSpecificProductionTrailers } from "@/app/services/BackgroundService";
import YoutubeClient from "./YoutubeClient";
import Playlist from "./Playlist";

async function StreamingPage({ params }) {
  console.log(params, 'streamingPage');
  const res = await fetchSpecificProductionTrailers(params.productionID, params.productionType);
  const videoKeys = res.results.length > 0 ? res.results.map(result => result.key) : [null];
  
  return (
    <div className='w-full flex flex-col'>
      <YoutubeClient videoKeys={videoKeys} params={params} />
      <Playlist videoKeys={videoKeys} />
    </div>
  )
}

export default StreamingPage