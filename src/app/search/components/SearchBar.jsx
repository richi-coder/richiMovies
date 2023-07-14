'use client'

import Link from "next/link";
import { ImCross } from "react-icons/im";

export default function SearchBar({ search, searchMovies, handleChange }) {
  console.log('searchBAR', search);
  
  return (
    <form onSubmit={searchMovies} className="w-[90vw] relative">
      <input
        className="bg-transparent text-white w-full text-3xl sm:text-5xl py-10 border-b-2 border-white mx-auto outline-none"
        type="text"
        value={search.input}
        onChange={handleChange}
        placeholder="Search"
        autoFocus
      />
      <Link
        href={"/productions"}
        className="absolute top-1/2 -translate-y-1/2 right-0"
      >
        <ImCross />
      </Link>
    </form>
  );
}