import Movie from "../models/Movie.js";

export default {
    getAll(data) {
        return Movie.find(data);
    },

    getOneById(id) {
        return Movie.findById(id);
    },

    createMovie(data) {
        data.rating = Number(data.rating);
        return Movie.create(data);
    },

    editMovie(id, data) {},
};
