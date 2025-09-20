import express from "express";
import routers from "./routes.js";
import handlebars from "express-handlebars";

const app = express();

app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("public"));

// parse data from req
app.use(express.urlencoded());

app.use(routers);

app.listen(5000, console.log("\nServer is listening on port: 5000..."));
