import express from "express";
import path from "path";
import cookieparser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";


const app = express();
const _dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json()); // request body
app.use(cookieparser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
	app.use(express.static(path.join(_dirname, "../frontend/dist")));

	app.get("*s", (_,res) => {
	res.sendFile(path.join(_dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
	console.log("Server running on port: " + PORT);
	connectDB();
});
