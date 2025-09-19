import { Router } from "express";
import movieServices from "../services/movieService.js";

const movieController = Router();

let isFirstSearchrendering = true;

movieController.get("/create", (req, res) => {
    res.render("create");
});

movieController.get("/details/:id", async (req, res) => {
    const movieId = req.params.id;
    const singleMovie = movieServices.getOneById(movieId);

    singleMovie.rating = "★".repeat(Math.floor(singleMovie.rating));

    res.render("details", { singleMovie: singleMovie });
});

movieController.get("/search", (req, res) => {
    const movies = movieServices.getAll();
    res.render("search", { movies: movies, isFirstSearchrendering: true });
});

// movieController.post("/search", (req, res) => {
//     res.render("search", { isFirstSearchrendering: false });
// });

export default movieController;
