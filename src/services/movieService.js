import Movie from "../models/Movie.js";

export default {
    getAll(data) {
        return Movie.findMovies();
    },

    getOneById(id) {
        return Movie.getMovieById(id);
    },

    createMovie(data) {},

    editMovie(id, data) {},
};
