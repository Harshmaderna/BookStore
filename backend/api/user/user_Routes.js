import express from "express"
import userController from "./user_Controller.js";

const userRouter = express.Router()  

userRouter.post("/signup", userController.userSignup)
userRouter.post("/login", userController.userLogin)

export default userRouter;
