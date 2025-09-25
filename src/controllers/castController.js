import { Router } from "express";

const castController = Router();

castController.get("/", (req, res) => {
    res.send("cast page works");
});

export default castController;
