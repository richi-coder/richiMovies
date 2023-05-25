function DetailComponent({ title, detail }) {
    let detailAdjusted = detail;
    if (detailAdjusted instanceof Object && !(detailAdjusted instanceof Array)) detailAdjusted = [detailAdjusted]
    const detailToShow = detailAdjusted === true || detailAdjusted === false ? 
                                            (detailAdjusted === true ? 'YES' : 'NO') :
                                            detailAdjusted instanceof Array ? 
                                            (detailAdjusted.map(det => det.name)).join(', ') :
                                            detailAdjusted
  return (
    <>
    {    
        detailToShow ?
        <div
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg bg-[rgb(24,24,27)] px-5 py-4 transition-all border border-[rgb(24,24,27)] hover:border-[rgb(236,72,153)] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}{' '}
                {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span> */}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {detailToShow}
              </p>
        </div> :
        null
        }
    </>
  )
}

export default DetailComponent