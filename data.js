import moviesDAta from "./movie-data.json" with { type: "json" }; //automaticly parse the JSON into array of objects

export const movies = moviesDAta;

export function getMovieById(movieId){
    return movies.find(m => m.id === movieId)
}
