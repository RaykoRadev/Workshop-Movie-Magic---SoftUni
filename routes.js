import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/create", (req, res) => {});

router.get("/details/:id ", (req, res) => {});

router.get("/about", (req, res) => {});

router.get("*spat", (req, res) => {
    res.render("404");
});

export default router;
