import Auth from "../models/Auth.js";

export default {
    register(userData) {
        return Auth.create(userData);
    },

    // login() {
    //     return Auth.findOne();
    // },

    findUser(email) {
        return Auth.findOne(email);
    },
};
