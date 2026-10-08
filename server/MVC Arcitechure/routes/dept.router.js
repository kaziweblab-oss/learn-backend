import express from "express";
import { getDept, postDept } from "../controller/dept.controller.js";

const router = express.Router();

router.get("/", getDept);

router.post("/", postDept);

export default router;
