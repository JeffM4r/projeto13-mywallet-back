import express from "express";
import * as negativeValueControlller from "../controllers/negativevalue.controlllers.js";
import { addValuesValidation } from "../middlewares/SchemaValidationMiddlewares.js";
import hasValidToken from "../middlewares/tokenValidationMiddleware.js";

const router = express.Router();

router.post("/negativevalue",hasValidToken, addValuesValidation, negativeValueControlller.create);

export default router;