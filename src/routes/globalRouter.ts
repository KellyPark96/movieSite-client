import express from "express";
import { join, login } from "../controllers/userController.ts";
import { home } from "../controllers/videoController.ts";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
