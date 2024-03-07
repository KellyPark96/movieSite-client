import express, { Express, Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

const PORT: number = 4000;

const app: Express = express();

const gossipMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (_req: Request, res: Response) => {
  return res.send("I love middlewares");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);

// const path = require('path');
// const express = require('express');
// const router = require('./lib/router');

// const { PORT = 3001 } = process.env;

// const app = express();

// // Middleware that parses json and looks at requests where the Content-Type header matches the type option.
// app.use(express.json());

// // Serve API requests from the router
// app.use('/api', router);

// // Serve app production bundle
// app.use(express.static('dist/app'));

// // Handle client routing, return all requests to the app
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'app/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// });