import { fetchData } from "./fetchData";

// Fetch movies by categories at homepage
export const fetchCategoriesMovies = async (category) => {
    const url = `https://api.themoviedb.org/3/movie/${category}`;
    const fetchMethod = {
        next: {
            revalidate: 30000
        }
    }
    const data = await fetchData(url, fetchMethod);
    return data;
}

// Fetch a movie for the moviePage
export const fetchSpecificMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
} 

// Fetch a movie trailer for the moviePage
export const fetchSpecificMovieTrailers = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`;
    const res = await fetch(url);
    const data = await res.json()
    return data;
} 
