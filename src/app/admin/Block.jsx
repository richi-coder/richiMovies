function Block({ title, description, setShowModal }) {
  return (
    <div
      className="group rounded-lg bg-[rgb(24,24,27)] px-10 py-8 transition-all border border-[rgb(24,24,27)] hover:border-[rgb(236,72,153)] hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 break-words w-full md:w-[45vw]"
      target="_blank"
    >
        <h2 className={`mb-3 text-5xl font-semibold`}>
            {title}{" "}
        </h2>
        <p className={`mx-auto sm:m-0 max-w-[30ch] text-sm opacity-50`}>
            {description}
        </p>
        <button
          onClick={() => setShowModal(true)}
          className='bg-[rgb(236,72,153)] hover:bg-[rgb(266,102,183)] sm:hover:translate-y-2 px-6 py-4 text-white font-bold text-lg sm:text-xl transition-all'>
            REVALIDATE
        </button>
    </div>
  );
}

export default Block;
