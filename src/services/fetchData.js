export const fetchData = async (url, fetchMethod) => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                `Bearer ${process.env.ACCESS_TOKEN}`,
        },
        ...fetchMethod
    };

    const moviesList = await fetch(url, options);
    const moviesData = await moviesList.json();
    return moviesData;
}