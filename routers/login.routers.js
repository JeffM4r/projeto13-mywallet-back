import express from "express";
import { loginValidation } from "../middlewares/SchemaValidationMiddlewares.js";
import * as loginController from "../controllers/login.controllers.js"

const router = express.Router();

router.post("/login",loginValidation, loginController.create);

export default router;