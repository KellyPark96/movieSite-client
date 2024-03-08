import express from "express";
import morgan from "morgan";
import globalRouter from "../routes/globalRouter.ts";
import videoRouter from "../routes/videoRouter.ts";
import userRouter from "../routes/userRouter.ts";

const PORT = 9000;

console.log("", process.cwd());

const app = express();
const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

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
