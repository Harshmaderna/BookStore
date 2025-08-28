import express from "express";
import bookControllers from "./bookController.js";

const router = express.Router()

router.post("/create-book", bookControllers.createBook)
router.get("/get-book", bookControllers.getAllBooks)

export default router; 