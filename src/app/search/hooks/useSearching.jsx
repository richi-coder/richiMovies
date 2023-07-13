import { fetchFromClient } from "@/services/ClientService";
import { useState } from "react"

export default function useSearching() {
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