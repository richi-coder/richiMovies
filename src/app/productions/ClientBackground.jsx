'use client'
import { useContext } from "react";
import { TopMoviesContext } from "./TopContext";

function ClientBackground({ children }) {
    const { topMoviesList, index } = useContext(TopMoviesContext);
  return (
    <>
        {children}
    </>
  )
}

export default ClientBackground