import { Router } from "express";
import { getMovieById, movies } from "./data.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("home", { movies: movies });
});

router.get("/create", (req, res) => {
    res.render("create");
});

router.get("/details/:id", (req, res) => {
    const movieId = req.params.id;
    const singleMovie = getMovieById(movieId);

    res.render("details", { singleMovie: singleMovie });
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/search", (req, res) => {
    res.render("search");
});

router.get("*spat", (req, res) => {
    res.render("404");
});

export default router;
