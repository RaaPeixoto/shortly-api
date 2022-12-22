import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routers/authRouters.js";
import urlsRouter from "./routers/urlsRouters.js";
import usersRouter from "./routers/usersRouter.js";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(urlsRouter);
app.use(usersRouter);







const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));