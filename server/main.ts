import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { Websocket } from "./src/services/Websocket";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const server = createServer(app);

app.use(cors);
app.get("/", (req: Request, res: Response) => {
	res.send("Express Server is running on port " + port + ".");
});

const io = new Server(server, {
	cors: {
		origin: "http://localhost:8000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => new Websocket(socket, io));

server.listen(port, () => {
	console.log(`⚡️[server]: !Server is running at https://localhost:${port}`);
});
