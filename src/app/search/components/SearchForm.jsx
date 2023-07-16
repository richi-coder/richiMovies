export default function SearchForm({ search, setSearch }) {

  const { searchMovies, handleChange } = setSearch
  return (

    <form onSubmit={searchMovies} className="w-[90vw] ">
        <input
          className="bg-transparent text-white w-full text-3xl sm:text-5xl py-10 border-b-2 border-white mx-auto outline-none"
          type="text"
          value={search.input}
          onChange={handleChange}
          placeholder="Search"
          autoFocus
        />
      </form>
  )
}
