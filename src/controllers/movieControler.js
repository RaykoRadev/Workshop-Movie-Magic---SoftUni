import { Router } from "express";
import movieServices from "../services/movieService.js";
import { log } from "console";

const movieController = Router();

movieController.get("/create", (req, res) => {
    res.render("create");
});

movieController.post("/create", async (req, res) => {
    const movieData = await req.body;
    movieServices.createMovie(movieData);
    res.redirect("/");
});

movieController.get("/details/:id", async (req, res) => {
    const movieId = req.params.id;
    const singleMovie = movieServices.getOneById(movieId);

    singleMovie.rating = "★".repeat(Math.floor(singleMovie.rating));

    res.render("details", { singleMovie: singleMovie });
});

movieController.get("/search", (req, res) => {
    const data = req.query;
    console.log(data);
    const movies = movieServices.getAll(data);
    res.render("search", { movies: movies });
});

export default movieController;
