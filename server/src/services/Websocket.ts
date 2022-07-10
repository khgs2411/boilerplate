import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
export class Websocket {
	socket: Socket;
	constructor(
		_socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
		_io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
	) {
		this.socket = _socket;
		this.init(_socket, _io);
	}

	private init(socket: Socket, io: Server) {
		console.log("connected: ", socket.id);

		socket.on("disconnect", (reason) => {
			console.log("disconnected");
			io.emit("disconnected", reason, socket.id);
		});
	}
}
