'use client'

import { fetchFromClient } from "@/services/ClientService";
import { useLayoutEffect, useRef, useState } from "react"
import { loadingState } from "@/app/search/utils/loadingState";
import { readSearchFromSessionStorage, storeSearchToSessionStorage } from "@/utils/sessionsStorage";
import { validateSearch } from "@/app/search/utils/searchValidations";

const initState = {
  input: '',
  state: loadingState.LOADING,
  searchedProductions: []
};

export default function useSearching() {
    const [query, setQuery] = useState(initState);
    const savedInput = useRef('');

    useLayoutEffect(() => {
      const savedQuery = readSearchFromSessionStorage();
      setQuery(savedQuery);
      savedInput.current = savedQuery.input;
    }, [])

    const searchMovies = (e) => {

          e.preventDefault();
          console.log(query.input, savedInput.current);
          if (!validateSearch(query.input, savedInput.current)) return

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
                savedInput.current = query.input;
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