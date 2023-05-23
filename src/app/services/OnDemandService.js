import { fetchData } from "./fetchData"

// Fetch movies for top component
export const fetchTopPageMovies = async (category) => {
    const url = `https://api.themoviedb.org/3/movie/${category}`;
    const fetchMethod = {
        next: {
            tags: [
                'collection'
            ]
        }
    }
    const data = await fetchData(url, fetchMethod);
    return data;
}