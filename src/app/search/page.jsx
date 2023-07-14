'use client';

import React from "react";
import SearchResults from "../../components/SearchResults";
import SearchBar from './components/SearchBar';
import useSearching from "./hooks/useSearching";

function SearchPage() {
  const [search, setSearch] = useSearching()

  return (
    <div className="text-white flex flex-col items-center animate-fade-up">
      <SearchBar search={search} setSearch={setSearch}  />
      <SearchResults search={search} />
    </div>
  );
}

export default SearchPage;
