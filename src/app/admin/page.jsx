import { limelight } from "../page";
import BlockContainer from "./BlockContainer";

const revalidateList = {
    topMovies: 'HEYYY THERE'
}


function AdminPage() {
  

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-7xl text-center pt-10 pb-5">Administration Panel</h1>
        <h2 className={`${limelight.className} text-center text-4xl`}>richiTrailers</h2>
        <p>This administration panel let's you revalidate some pages on demand</p>
        <p>According to Next.js, revalidation is a procedure that can be done to update specific static routes without rebuilding the entire site.</p>
        <p>This page uses 4 rendering methods Next.js offers: </p>
        <ul>
          <li>Static Site Generation</li>
          <li>Server Side Rendering</li>
          <li>Incremental Static Regeneration</li>
          <li>Client Side Rendering</li>
        </ul>
        <p>Revalidating data is the esence of Incremental Static Regeneration</p>
        <BlockContainer revalidateList={revalidateList} />
        
    </div>
  ) 
}

export default AdminPage