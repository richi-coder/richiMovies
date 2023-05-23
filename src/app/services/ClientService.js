// Fetch for searching movies from client
// Hitting an own api endpoint (/api/search) which will return data from the external api to my api
export const fetchFromClient = async (query) => {
    const data = await fetch(`/api/search?query=${query}`);
    return data.json();
}

export const fetchSuggestions = async () => {
    const data = await fetch('/api/suggestions');
    return data.json()
}