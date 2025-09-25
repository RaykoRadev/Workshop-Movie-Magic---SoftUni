import Casts from "../models/Cast.js";

export default {
    createCast(data) {
        return Casts.create(data);
    },

    getAll() {
        return Casts.find();
    },
};
