'use client'

import { fetchFromClient } from "@/services/ClientService";
import { useEffect, useLayoutEffect, useState } from "react"
import { loadingState } from "../utils/loadingState";
import { readSearchFromSessionStorage, storeSearchToSessionStorage } from "../utils/sessionsStorage";

const initState = {
  input: '',
  state: loadingState.IDLING,
  searchedProductions: []
};

export default function useSearching() {
    const [query, setQuery] = useState(initState);

    useLayoutEffect(() => {
      console.log('effect');
      const savedQuery = readSearchFromSessionStorage()
      setQuery(savedQuery)
    }, [])
    

    const searchMovies = (e) => {
          e.preventDefault();
          setQuery({
            ...query,
            state: loadingState.LOADING
          })
          fetchFromClient(query.input)
              .then(({ data }) => {
                if (data.results.length > 0) {
                  setQuery({
                    ...query,
                    state: loadingState.FOUND,
                    searchedProductions: data.results
                  })
                  const searchToStore = {
                    searchMade: query.input,
                    productionsResults: data.results
                  }
                  storeSearchToSessionStorage(searchToStore)
                } else {
                  setQuery({
                    ...query,
                    state: loadingState.NOT_FOUND
                  })
                }
              })
              .catch(err => console.log(err, 'Error fetching productions!')) 
        }
    
    const handleChange = ({ target }) => {
        setQuery({
          ...query,
          input: target.value,
        })
    }
      
    const setSearch = {
        handleChange,
        searchMovies
    }
  
    return [query, setSearch];
}