import { Router } from "express";
import homeController from "./src/controllers/homeController.js";
import movieController from "./src/controllers/movieControler.js";

const routers = Router();

routers.use(homeController);
routers.use("/movies", movieController);

routers.get("*spat", (req, res) => {
    res.render("404");
});

export default routers;
