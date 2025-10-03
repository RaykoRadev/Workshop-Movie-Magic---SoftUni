import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/constants.js";

export function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
    return token;
}
