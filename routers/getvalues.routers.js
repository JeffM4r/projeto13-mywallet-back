import express from "express";
import * as getValuesControlller from "../controllers/getvevalues.controllers.js";

const router = express.Router();

router.get("/values", getValuesControlller.list);

export default router;