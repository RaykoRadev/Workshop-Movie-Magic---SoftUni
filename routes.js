import { Router } from "express";
import homeController from "./src/controllers/homeController.js";
import movieController from "./src/controllers/movieControler.js";
import castController from "./src/controllers/castController.js";

const routers = Router();

routers.use(homeController);
routers.use("/movies", movieController);
routers.use("/casts", castController);

routers.get("*spat", (req, res) => {
    res.render("404");
});

export default routers;
