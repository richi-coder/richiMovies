import { limelight } from "../page";
import BlockContainer from "./BlockContainer";

const revalidateList = {
    topMovies: 'HEYYY THERE'
}


function AdminPage() {
  

  return (
    <div className="flex flex-col items-center w-100 px-10">
        <h1 className="text-4xl sm:text-6xl text-center pt-10 pb-5 font-bold">Administration Panel</h1>
        <h2 className={`${limelight.className} text-center text-3xl sm:text-4xl pb-5`}>richiTrailers</h2>
        <p>This administration panel lets you revalidate some pages on demand.</p>
        <p><strong><em>Incremental Static Regeneration</em></strong> allows revalidating specific static routes without rebuilding the entire site.</p>
        <p>This is thanks to Next.js serverless functions</p>
        <br />
        <p>The blocks down allows you to revalidate the pages indicated (update parts of the routes).</p>
        <p>When updating pages, a serverless function is run, and as this type of function is stateful, the new data shown is randomly changed</p>
        <br /><br />
        <p><strong>Click UPDATE BUTTON at any block</strong> </p>
        <BlockContainer revalidateList={revalidateList} />
    </div>
  ) 
}

export default AdminPage