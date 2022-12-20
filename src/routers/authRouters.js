
import { Router } from "express";
import {

  signInValidation,
  signUpValidation
} from "../middlewares/authValidationMiddleware.js";
import {signIn, signUp} from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", signUpValidation, signUp);
authRouter.post("/signin", signInValidation, signIn);

export default authRouter;