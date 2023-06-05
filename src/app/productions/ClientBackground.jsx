'use client'
import { useContext } from "react";
import { TopMoviesContext } from "./TopContext";
import BackgroudMovie from "./BackgroundMovie";

function ClientBackground() {
    const { url } = useContext(TopMoviesContext);
  return (
    <BackgroudMovie url={url} />
  )
}

export default ClientBackground