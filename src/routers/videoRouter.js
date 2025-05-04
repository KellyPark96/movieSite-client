import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id([0-9]+)", see);
videoRouter.get("/:id([0-9]+)/edit", edit);
videoRouter.get("/:id([0-9]+)/delete", deleteVideo);

export default videoRouter;
