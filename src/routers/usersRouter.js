
import { Router } from "express";
import { getUserUrls } from "../controllers/usersController.js";
import { getUserValidation } from "../middlewares/usersValidationMiddleware.js";




const usersRouter = Router();
usersRouter.get("/users/me",getUserValidation,getUserUrls );



export default usersRouter;