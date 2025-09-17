import express from "express";
import { hbs } from "./hbsConfig.js";
import router from "./routes.js";

const app = express();
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use("/", router);

app.listen(5000, console.log("\nServer is listening on port: 5000..."));
