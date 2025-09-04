import express from "express"
import userController from "./userController.js"

const userRouter = express.Router()

userRouter.post("/userSignup", userController.SignupUser)

export default userRouter;