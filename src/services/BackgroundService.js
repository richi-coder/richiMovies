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

// Fetch tv series by categories at homepage
export const fetchCategoriesSeries = async (category) => {
    const url = `https://api.themoviedb.org/3/tv/${category}`;
    const fetchMethod = {
        next: {
            revalidate: 30000
        }
    }
    const data = await fetchData(url, fetchMethod);
    return data;
}

// Fetch a movie for the moviePage
export const fetchSpecificMovie = async (productionID, productionType) => {
    const url = `https://api.themoviedb.org/3/${productionType}/${productionID}?api_key=${process.env.API_KEY}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
} 

// Fetch a movie trailer for the moviePage
export const fetchSpecificProductionTrailers = async (productionID, productionType) => {
    const url = `https://api.themoviedb.org/3/${productionType}/${productionID}/videos?api_key=${process.env.API_KEY}`;
    const res = await fetch(url);
    const data = await res.json()
    return data;
} 

// Fetching productions for productionsType PAGE
export const fetchProductionTypePage = async (mediatype) => {
    const url = `https://api.themoviedb.org/3/discover/${mediatype}?api_key=${process.env.API_KEY}`;
    const fetchMethod = {
        next: {
            revalidate: 7200
        }
    }
    const res = await fetch(url, fetchMethod);
    const data = await res.json();
    return data;
}