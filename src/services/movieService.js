import { Types } from "mongoose";
import Movie from "../models/Movie.js";

export default {
    getAll(query = {}) {
        let result = Movie.find();

        // console.log(query);

        if (query.title) {
            result = result.find({
                title: { $regex: query.title, $options: "i" },
            });
        }

        if (query.genre) {
            result = result.find({
                genre: { $regex: `^${query.genre}$`, $options: "i" },
            });
        }

        if (query.year) {
            result = result.where("year").equals(query.year);
        }

        return result;
    },

    getOneById(id) {
        return Movie.findById(id).populate("casts");
    },

    createMovie(data) {
        data.rating = Number(data.rating);
        return Movie.create(data);
    },

    editMovie(id, data) {},

    attachCast(movieId, castId) {
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    },
};
