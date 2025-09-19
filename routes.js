import { Router } from "express";
import { getMovieById, movies } from "./data.js";
import Movie from "./src/services/movieService.js";

const router = Router();
let isFirstSearchrendering = true;

router.get("/", (req, res) => {
    res.render("home", { movies: movies });
});

router.get("/create", (req, res) => {
    res.render("create");
});

router.get("/details/:id", async (req, res) => {
    const movieId = req.params.id;
    const singleMovie = await Movie.getMovieById(movieId);

    res.render("details", { singleMovie: singleMovie });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/search", (req, res) => {
    res.render("search", { movies: movies, isFirstSearchrendering: true });
});

router.post("/search", (req, res) => {
    res.render("search", { isFirstSearchrendering: false });
});

router.get("*spat", (req, res) => {
    res.render("404");
});

export default router;
