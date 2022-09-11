import express from "express";
import * as positiveValueControlller from "../controllers/positivevalue.controllers.js";

const router = express.Router();

router.post("/positivevalue", positiveValueControlller.create);

export default router;