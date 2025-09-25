import { model, Schema } from "mongoose";

const castSchema = new Schema({
    name: { type: String, required: true },
    age: { Number, required: true, max: 120, min: 0 },
    born: { type: String, required: true },
    "name-in-movie": { type: String },
    imageUrl: { type: String, required },
});

const Casts = model("Casts", castSchema);

export default Casts;
