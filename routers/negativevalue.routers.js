import express from "express";
import * as negativeValueControlller from "../controllers/negativevalue.controlllers.js";

const router = express.Router();

router.post("/negativevalue", negativeValueControlller.create);

export default router;