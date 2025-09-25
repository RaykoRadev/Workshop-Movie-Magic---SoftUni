import fs from "fs/promises";
import { v4 as uuid } from "uuid";

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

        console.log(criteria);

        if (criteria.title) {
            result = db.movies.filter((m) =>
                m.title.toLowerCase().includes(criteria.title.toLowerCase())
            );
        }

        if (criteria.genre) {
            result = db.movies.filter(
                (m) => m.genre.toLowerCase() === criteria.genre.toLowerCase()
            );
        }

        if (criteria.year) {
            result = db.movies.filter((m) => m.year === criteria.year);
        }

        return result;
    }

    static getMovieById(movieId) {
        return db.movies.find((m) => m.id === movieId);
    }

    async save() {
        db.movies.push(this);

        const dbDeserialized = JSON.stringify(db, null, 2);

        await fs.writeFile("./src/movie-data.json", dbDeserialized);

        return this;
    }
}
