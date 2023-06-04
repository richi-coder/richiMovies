function Block({ title, setShowModal, pathToRevalidate, revalidateThisPath, description }) {

  const clickingUpdate = () => {
    revalidateThisPath(pathToRevalidate)
    setShowModal(true)
  }

  return (
    <div
      className="group rounded-lg bg-[rgb(24,24,27)] px-10 py-8 transition-all border border-[rgb(24,24,27)] hover:border-[rgb(236,72,153)] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 break-words w-full md:w-[45vw]"
      target="_blank"
    >
        <h2 className={`mb-3 text-3xl sm:text-5xl font-semibold`}>
            {title}{" "}
        </h2>
        <p className={`mx-auto sm:m-0 text-lg py-3 opacity-50`}>
            {description}
            <br />
            <strong>Click here to update!</strong>
        </p>
        <button
          onClick={clickingUpdate}
          className='bg-[rgb(236,72,153)] hover:bg-[rgb(266,102,183)] sm:hover:translate-y-2 px-10 py-5 text-white font-bold text-lg sm:text-xl transition-all'>
            UPDATE
        </button>
    </div>
  );
}

export default Block;
