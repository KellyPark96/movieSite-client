import { Request, Response } from "express";
import Video from "../models/Video.ts";

export const home = async (_req: Request, res: Response) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (_req: Request, res: Response) => {
  return res.render("watch", { pageTitle: "Watching" });
};
export const getEdit = (_req: Request, res: Response) => {
  return res.render("edit", { pageTitle: "Editing" });
};
export const postEdit = (req: Request, res: Response) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (_req: Request, res: Response) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (_req: Request, res: Response) => {
  return res.redirect("/");
};
