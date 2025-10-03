import Auth from "../models/Auth.js";

export default {
    register(userData) {
        return Auth.create(userData);
    },
};
