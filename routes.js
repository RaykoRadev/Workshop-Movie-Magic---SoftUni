import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/create", (req, res) => {
    res.render("create");
});

router.get("/details/:id", (req, res) => {
    const movieId = req.params.id;
    console.log(movieId);
    res.render(
        "details"
        // { id: movieId }
    );
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
