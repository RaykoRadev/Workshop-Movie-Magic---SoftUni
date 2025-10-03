import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const authSchema = new Schema({
    email: { type: String, required: [true, "Email is required!"] },
    password: { type: String, required: [true, "Password is required!"] },
});

authSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const Auth = model("Auth", authSchema);

export default Auth;
