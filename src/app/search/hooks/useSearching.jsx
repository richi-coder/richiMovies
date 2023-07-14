import { fetchFromClient } from "@/services/ClientService";
import { useState } from "react"
import { loadingState } from "../utils/loadingState";

export default function useSearching() {
    const [query, setQuery] = useState({
        input: '',
        state: loadingState.IDLING,
        searchedProductions: []
      });
    
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
                } else {
                  setQuery({
                    ...query,
                    state: loadingState.NOT_FOUND
                  })
                }
              })
              .catch(err => console.log(err, 'error')) 
        }
    
      const handleChange = ({ target }) => {
        setQuery({
          ...query,
          input: target.value,
        })
      }
      
      const search = query;
      const setSearch = {
        handleChange,
        searchMovies
      }
  
    return [search, setSearch]
}