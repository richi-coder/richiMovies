import ClientLoader from "@/app/ClientLoader";
import ResultProduction from "./ResultMovie";

export default function SearchResults({ search }) {
  const { state, searchedProductions } = search;

  return (
      <ul className={`w-full ${!state ? 'flex flex-col items-center' : 'sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'} h-full md:gap-x-16 lg:gap-x-0 gap-y-5 py-10 px-2`}>
        {
          state ? (
            searchedProductions.map((searchedProduction) => (
              <ResultProduction
                key={searchedProduction.id}
                searchedProduction={searchedProduction}
              />
            ))
          ) : state === false ? (
            <ClientLoader />
          ) : null
        }
      </ul>
  );
}
