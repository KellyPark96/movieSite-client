import express from "express";
import morgan from "morgan";
import globalRouter from "../routes/globalRouter.ts";
import videoRouter from "../routes/videoRouter.ts";
import userRouter from "../routes/userRouter.ts";

const app = express();
const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(logger);

app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// const { PORT = 3001 } = process.env;

// // Serve API requests from the router
// app.use('/api', router);

// // Serve app production bundle
// app.use(express.static('dist/app'));

// // Handle client routing, return all requests to the app
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'app/index.html'));
// });

export default app;
