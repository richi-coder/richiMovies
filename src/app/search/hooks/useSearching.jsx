'use client'

import { fetchFromClient } from "@/services/ClientService";
import { useEffect, useLayoutEffect, useState } from "react"
import { loadingState } from "../utils/loadingState";
import { readSearchFromSessionStorage, storeSearchToSessionStorage } from "../utils/sessionsStorage";

const initState = {
  input: '',
  state: loadingState.LOADING,
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
        if (target.value === '') {
          setQuery({
            state: loadingState.IDLING,
            input: target.value,
            searchedProductions: []
          })
          return
        }
        setQuery({
          ...query,
          input: target.value,
        })
    }
    
    const emptySearchBar = () => {
      setQuery({
        state: loadingState.IDLING,
        input: '',
        searchedProductions: []
      })
    }
      
    const setSearch = {
        handleChange,
        searchMovies,
        emptySearchBar
    }
  
    return [query, setSearch];
}