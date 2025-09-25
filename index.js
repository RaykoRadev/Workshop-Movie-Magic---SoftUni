import mongoose from "mongoose";
import express from "express";
import routers from "./routes.js";
import handlebars from "express-handlebars";

const app = express();

const url = "mongodb://localhost:27017";

try {
    await mongoose.connect(url, {
        dbName: "movieMagic",
    });
    console.log("Connected to the DB!");
} catch (error) {
    console.log("Cant connect to the DB.... ", error.message);
}

app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("public"));

// parse data from req
app.use(express.urlencoded());

app.use(routers);

app.listen(5000, console.log("\nServer is listening on port: 5000..."));
