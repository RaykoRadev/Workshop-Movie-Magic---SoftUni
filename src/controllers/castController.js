import { Router } from "express";
import castService from "../services/castService.js";

const castController = Router();

castController.get("/create", (req, res) => {
    res.render("casts/create");
});

castController.post("/create", async (req, res) => {
    const data = await req.body;
    console.log(data);
    castService.createCast(data);
    res.redirect("/");
});

export default castController;
