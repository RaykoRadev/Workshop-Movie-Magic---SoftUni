import Movie from "../models/Movie.js";

export default {
    getAll(data) {
        return Movie.find(data);
    },

    getOneById(id) {
        return Movie.getMovieById(id);
    },

    createMovie(data) {
        console.log(data);
        const newMovie = new Movie(data);
        newMovie.save();
    },

    editMovie(id, data) {},
};
