import express from "express";
import { getHome } from "../controller/index.controller.js";

const router = express.Router();

router.get("/", getHome);

export default router;
