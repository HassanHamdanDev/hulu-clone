import requests from "./requests";

export const getResults = async (genreName: string) => {
    const request = await fetch(`https://api.themoviedb.org/3${requests[genreName]?.url || requests.fetchTrending.url}`, { cache: "no-cache" })
        .then(res => res.json())
        .then(data => data.results);
    return request;
};