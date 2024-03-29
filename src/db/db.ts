import mongoose, { Error } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/moviesite-client");

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error: Error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
