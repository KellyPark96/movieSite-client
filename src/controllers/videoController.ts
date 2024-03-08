import { Request, Response } from "express";
import Video, { videoSchemaTypeProps } from "../models/Video.ts";

export const home = async (_req: Request, res: Response) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const video: videoSchemaTypeProps | null = await Video.findById(id);
  return res.render("watch", { pageTitle: video?.title, video });
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
export const postUpload = async (req: Request, res: Response) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title: title,
      description: description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word: string) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error: any) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error.message,
    });
  }
};
