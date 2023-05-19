import express from "express";
import { getmarkBySID, studentLogin } from "../controllers/StudentController.js";

const router = express.Router();
router.post("/studentLogin",studentLogin)
router.get("/getmarkBySID/:id",getmarkBySID)
export default router;