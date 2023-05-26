// Fetch for searching movies from client
// Hitting an own api endpoint (/api/search) which will return data from the external api to my api
export const fetchFromClient = async (query) => {
    const data = await fetch(`/api/search?query=${query}`);
    return data.json();
}

// Suggestions from client
export const fetchSuggestions = async () => {
    const data = await fetch('/api/suggestions');
    return data.json()
}

// Fetching movies for moviesPage
export const fetchProductionsPage = async (mediatype) => {
    const data = await fetch(`/api/productions?mediatype=${mediatype}`);
    return data.json();
}

// Fetching series for seriesPage