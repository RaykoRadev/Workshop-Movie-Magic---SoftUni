import { v4 as uuid } from "uuid";
import fs from "fs/promises";

let dbSerialized = await fs.readFile("./src/movie-data.json", {
    encoding: "utf-8",
});
let db = JSON.parse(dbSerialized);

// console.log(db);

export default class Movie {
    constructor(data) {
        Object.assign(this, data);

        this.id = uuid();
    }

    static findMovies(criteria = {}) {
        let result = db.movies;

        return result;
    }

    static getMovieById(movieId) {
        return db.movies.find((m) => m.id === movieId);
    }

    async save() {
        db.movie.push(this);

        const dbDeserialized = JSON.stringify(db, null, 2);

        await fs.writeFile(".src/movie-data.json", dbDeserialized);

        return this;
    }
}
