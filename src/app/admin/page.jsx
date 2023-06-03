import { limelight } from "../page";
import BlockContainer from "./BlockContainer";

const revalidateList = {
    topMovies: 'HEYYY THERE'
}


function AdminPage() {
  

  return (
    <div className="flex flex-col items-center w-100">
        <h1 className="text-7xl text-center pt-10 pb-5">Administration Panel</h1>
        <h2 className={`${limelight.className} text-center text-4xl`}>richiTrailers</h2>
        <p>This administration panel lets you revalidate some pages on demand</p>
        <p>Incremental Static Regeneration allows revalidating specific static routes without rebuilding the entire site</p>
        <p>This is thanks to Next.js serverless functions</p>
        <br />
        <p>The blocks down allows you to </p>
        <BlockContainer revalidateList={revalidateList} />
    </div>
  ) 
}

export default AdminPage