import express from "express";
import * as getValuesControlller from "../controllers/getvevalues.controllers.js";
import hasValidToken from "../middlewares/tokenValidationMiddleware.js";

const router = express.Router();

router.get("/values",hasValidToken, getValuesControlller.list);

export default router;