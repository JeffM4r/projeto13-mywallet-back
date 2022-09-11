import express from "express";
import * as signUpcontroller from "../controllers/signup.controllers.js"

const router = express.Router();

router.post("/signup", signUpcontroller.create);

export default router;