'use client';
import React, { useState } from "react";
import { fetchFromClient } from "../services/ClientService";
import SearchResults from "./SearchResults";
import Link from "next/link";

function Search() {
  const [query, setQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    const { data } = await fetchFromClient(query);
    console.log(data, 'SEARCH PAGE');
    setSearchedMovies(data.results)
  }

  const saveSearch = ({ target }) => {
    setQuery(target.value)
  }

  return (
    <div className="text-white flex flex-col items-center animate-fade-up">
      <form onSubmit={searchMovies} className='w-[90vw] relative'>
        <input
          className="bg-transparent text-white w-full text-3xl sm:text-5xl py-10 border-b-2 border-white mx-auto outline-none"
          type="text"
          value={query}
          onChange={saveSearch}
          placeholder="Search"
          autoFocus
        />
        <Link href={'/productions'}><i className="absolute top-1/2 -translate-y-1/2 right-0">X</i></Link>
      </form>
      <SearchResults searchedMovies={searchedMovies} />
    </div>
  );
}

export default Search;
