import express from "express";
import bookController from "./bookController.js";
const router = express.Router()



router.post("/books", bookController.createBook)
router.get("/get", bookController.getBook)
router.get("/get/:id", bookController.getBookById) 


export default router