import { fetchData } from "./fetchData"

// Fetch *movies* for top component
export const fetchTopPageMovies = async (category) => {
    const url = `https://api.themoviedb.org/3/movie/${category}`;
    const fetchMethod = {
        next: {
            path: [
                'productions'
            ]
        }
    }
    const data = await fetchData(url, fetchMethod);
    return data;
}

// Fetch productions for homePosters, using same code as /api/productions
export const fetchHomePosters = async () => {
    const mediatype = 'movie'
    const url = `https://api.themoviedb.org/3/discover/${mediatype}?page=1&primary_release_year=2023&sort_by=popularity.desc`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        },
        next: {
            path: [
                '/'
            ]
        }
      };
    
    const res = await fetch(url, options);
    const data = await res.json()
    return data;
}