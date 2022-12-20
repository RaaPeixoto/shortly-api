import { Router } from "express";
import { getIdUrl, getOpenUrl, postUrl } from "../controllers/urlsController.js";
import { getOpenUrlValidation, postUrlValidation } from "../middlewares/urlsValidationMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", postUrlValidation,postUrl);
urlsRouter.get("/urls/:id", getIdUrl);
urlsRouter.get("/urls/open/:shortUrl",getOpenUrlValidation,getOpenUrl)
export default urlsRouter;