import { Request, Response } from "express";

export const join = (_req: Request, res: Response) => res.send("Join");
export const edit = (_req: Request, res: Response) => res.send("Edit User");
export const remove = (_req: Request, res: Response) => res.send("Remove User");
export const login = (_req: Request, res: Response) => res.send("Login");
export const logout = (_req: Request, res: Response) => res.send("Log out");
export const see = (_req: Request, res: Response) => res.send("See User");
