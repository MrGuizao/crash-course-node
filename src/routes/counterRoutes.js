// src/routes/counterRoutes.js
import express from "express";
import { getCounter, incrementCounter, decrementCounter } from "../controllers/counterController.js";

const router = express.Router();

router.get("/", getCounter);
router.post("/increment", incrementCounter);
router.post("/decrement", decrementCounter);

export default router;