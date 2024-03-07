import { Request, Response } from "express";

export const trending = (_req: Request, res: Response) =>
  res.send("Home Page Videos");
export const see = (req: Request, res: Response) => {
  return res.send(`Watch Video ${req.params.id}`);
};
export const edit = (_req: Request, res: Response) => res.send("Edit");
export const search = (_req: Request, res: Response) => res.send("Search");
export const upload = (_req: Request, res: Response) => res.send("Upload");
export const deleteVideo = (_req: Request, res: Response) =>
  res.send("Delete Video");
