import { Router } from "express";
import { registerUser, loginUser, getSingleUser, logoutUser, allUser } from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/all").get(verifyUser, allUser)
router.route("/logout").post(verifyUser, logoutUser)
router.route("/:id").get(verifyUser, getSingleUser)


export default router