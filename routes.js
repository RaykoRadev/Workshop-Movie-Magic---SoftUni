import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("homePage is working");
});

export default router;
