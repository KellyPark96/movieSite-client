import "../db/db.ts";
import "../models/Video.ts";
import app from "./server.ts";

const PORT = 9000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
