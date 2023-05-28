'use client';
import React, { useState } from "react";
import { fetchFromClient } from "../services/ClientService";
import SearchResults from "./SearchResults";
import Link from "next/link";
import { ImCross } from "react-icons/im"
import ClientLoader from "../ClientLoader";

function Search() {
  const [query, setQuery] = useState({
    input: '',
    state: null,
    searchedProductions: []
  });

  const searchMovies = (e) => {
    e.preventDefault();
    setQuery({
      ...query,
      state: false
    })
    fetchFromClient(query.input)
        .then(res => {
          setQuery({
            ...query,
            state: true,
            searchedProductions: res.data.results
          })
        })
    
  }

  const saveSearch = ({ target }) => {
    setQuery({
      ...query,
      input: target.value,
    })
  }

  return (
    <div className="text-white flex flex-col items-center animate-fade-up">
      <form onSubmit={searchMovies} className='w-[90vw] relative'>
        <input
          className="bg-transparent text-white w-full text-3xl sm:text-5xl py-10 border-b-2 border-white mx-auto outline-none"
          type="text"
          value={query.input}
          onChange={saveSearch}
          placeholder="Search"
          autoFocus
        />
        <Link href={'/productions'} className="absolute top-1/2 -translate-y-1/2 right-0">
          <ImCross />
        </Link>
      </form>
      {
        query.state ?
        <SearchResults searchedMovies={query.searchedProductions} /> :
        query.state === false ?
        <ClientLoader /> :
        null
      }
    </div>
  );
}

export default Search;
