import ResultProduction from "./ResultProduction";

export function ListResults({ searchedProductions }) {
  return (
    <>
      {
        searchedProductions.map((searchedProduction) => (
          <ResultProduction
            key={searchedProduction.id}
            searchedProduction={searchedProduction}
          />
        ))
      }
    </>
  );
}
