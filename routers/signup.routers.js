import express from "express";
import * as signUpcontroller from "../controllers/signup.controllers.js"
import { signUpValidation } from "../middlewares/SchemaValidationMiddlewares.js";

const router = express.Router();

router.post("/signup",signUpValidation, signUpcontroller.create);

export default router;