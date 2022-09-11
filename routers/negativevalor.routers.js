import express from "express";
import * as negativeValorControlller from "../controllers/negativevalor.controlllers.js";

const router = express.Router();

router.post("/negativevalor", negativeValorControlller.create);
router.get("/negativevalor", negativeValorControlller.list);

export default router;