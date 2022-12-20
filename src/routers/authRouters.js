
import { Router } from "express";
import {

  signUpValidation
} from "../middlewares/authValidationMiddleware.js";
import {signUp} from "../controllers/usersController.js";

const authRouter = Router();

authRouter.post("/signup", signUpValidation, signUp);


export default authRouter;