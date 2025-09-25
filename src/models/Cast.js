import { model, Schema } from "mongoose";

const castSchema = new Schema({
    name: { type: String, required: [true, "Cast name is required!"] },
    age: { type: Number, required: true, max: 120, min: 0 },
    born: { type: String, required: [true, "This field is required!"] },
    "name-in-movie": { type: String },
    imageUrl: { type: String, required: [true, "Cast image is required!"] },
});

const Cast = model("Cast", castSchema);

export default Cast;
