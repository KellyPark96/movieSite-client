import { Request, Response } from "express";

let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (_req: Request, res: Response) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req: Request, res: Response) => {
  const { id } = req.params;
  const video = videos[Number(id) - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req: Request, res: Response) => {
  const { id } = req.params;
  const video = videos[Number(id) - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[Number(id) - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (_req: Request, res: Response) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (_req: Request, res: Response) => {
  // here we will add a video to the videos array.
  return res.redirect("/");
};
