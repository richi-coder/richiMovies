'use client';
import React, { createContext, useEffect, useState } from 'react'


export const TopMoviesContext = createContext();

export function TopContext({ children, topMoviesList }) {
        const topMoviesLength = topMoviesList.length;

        const [index, setIndex] = useState(0)
        
        useEffect(() => {
            setTimeout(() => {
                if (index === topMoviesLength - 1) {
                    setIndex(0)
                    return
                }
                setIndex(index + 1)
            }, 10000);
        }, [index])
    
  return (
    <TopMoviesContext.Provider value={{ topMoviesList, index }}>
        {children}
    </TopMoviesContext.Provider>
  )
}

export default TopContext