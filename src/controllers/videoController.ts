import { Request, Response } from "express";

export const trending = (_req: Request, res: Response) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (_req: Request, res: Response) => res.render("watch");
export const edit = (_req: Request, res: Response) => res.render("edit");
export const search = (_req: Request, res: Response) => res.send("Search");
export const upload = (_req: Request, res: Response) => res.send("Upload");
export const deleteVideo = (_req: Request, res: Response) =>
  res.send("Delete Video");
