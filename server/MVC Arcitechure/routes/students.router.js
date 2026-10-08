import express from "express";
import { getStudent, postStudent } from "../controller/student.controller.js";

const router = express.Router();

router.get("/", getStudent);

router.post("/", postStudent);

export default router;
