import handelbars from "express-handlebars";
import path from "node:path";

export const hbs = handelbars.engine("hbs", {
    extname: "hbs",
});
