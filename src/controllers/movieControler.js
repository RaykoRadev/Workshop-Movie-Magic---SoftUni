import { Router } from "express";
import movieServices from "../services/movieService.js";
import castServices from "../services/castService.js";

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
    const singleMovie = await movieServices.getOneById(movieId);

    singleMovie.rating = "★".repeat(Math.floor(singleMovie.rating));

    res.render("details", { singleMovie: singleMovie });
});

movieController.get("/search", async (req, res) => {
    const query = req.query;

    const movies = await movieServices.getAll(query);

    res.render("search", {
        movies: movies,
        title: query.title,
        genre: query.genre,
        year: query.year,
    });
});

movieController.get("/attach/:id", async (req, res) => {
    const id = req.params.id;
    const movie = await movieServices.getOneById(id);
    const casts = await castServices.getAll({ excludes: movie.casts });

    res.render("casts/attach", { movie, casts });
});

movieController.post("/attach/:id", async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.id;

    await movieServices.attachCast(movieId, castId);
    res.redirect(`/movies/details/${movieId}`);
});

export default movieController;
