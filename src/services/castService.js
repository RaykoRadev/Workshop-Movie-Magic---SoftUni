import Casts from "../models/Cast.js";

export default {
    createCast(data) {
        return Casts.create(data);
    },

    getAll(castsArr = {}) {
        let allCasts = Casts.find();
        if (castsArr.excludes) {
            allCasts = allCasts.nin("_id", castsArr.excludes);
        }
        return allCasts;
    },
};
