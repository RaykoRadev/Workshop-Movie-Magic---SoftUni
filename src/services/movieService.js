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

    static getMovieById(movieId) {
        return db.find((m) => m.id === movieId);
    }
}
