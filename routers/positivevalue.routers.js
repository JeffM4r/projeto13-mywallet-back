import express from "express";
import * as positiveValueControlller from "../controllers/positivevalue.controllers.js";
import { addValuesValidation } from "../middlewares/SchemaValidationMiddlewares.js";
import hasValidToken from "../middlewares/tokenValidationMiddleware.js";

const router = express.Router();

router.post("/positivevalue",hasValidToken, addValuesValidation, positiveValueControlller.create);

export default router;