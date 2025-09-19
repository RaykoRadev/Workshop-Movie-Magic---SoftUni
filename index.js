import express from "express";
import router from "./routes.js";
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

app.use("/", router);

app.listen(5000, console.log("\nServer is listening on port: 5000..."));
