import { Router } from "express";
import { deleteUrl, getIdUrl, getOpenUrl, getRanking, postUrl } from "../controllers/urlsController.js";
import { deleteUrlValidation, getOpenUrlValidation, postUrlValidation } from "../middlewares/urlsValidationMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", postUrlValidation,postUrl);
urlsRouter.get("/urls/:id", getIdUrl);
urlsRouter.get("/urls/open/:shortUrl",getOpenUrlValidation,getOpenUrl);
urlsRouter.delete("/urls/:id",deleteUrlValidation,deleteUrl);
urlsRouter.get("/ranking",getRanking);
export default urlsRouter;