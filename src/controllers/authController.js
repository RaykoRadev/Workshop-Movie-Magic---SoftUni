import { Router } from "express";
import authServices from "../services/userService.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", async (req, res) => {
    const userData = req.body;
    await authServices.register(userData);
    res.redirect("/");
});

export default authController;
