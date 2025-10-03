import { Router } from "express";
import bcrypt from "bcrypt";
import authServices from "../services/userService.js";
import { generateToken } from "../utils/generateToken.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", async (req, res) => {
    const userData = req.body;
    await authServices.register(userData);
    res.redirect("/");
});

authController.get("/login", (req, res) => {
    res.render("auth/login");
});

authController.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await authServices.findUser({ email });

    if (!user) {
        throw new Error("Invalid email or password!");
    }
    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
        throw new Error("Invalid email or password!");
    }

    const token = generateToken(user);

    res.cookie("auth", token);

    res.redirect("/");
});

export default authController;
