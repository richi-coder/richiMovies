import ResultProduction from "./ResultProduction";

export function ListResults({ searchedProductions }) {
  return (
    <ul className={`w-full sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 h-full md:gap-x-16 lg:gap-x-0 gap-y-5 py-10 px-2`}>
      {
        searchedProductions.map((searchedProduction) => (
          <ResultProduction
            key={searchedProduction.id}
            searchedProduction={searchedProduction}
          />
        ))
      }
    </ul>
  );
}
