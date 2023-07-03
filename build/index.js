"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const dotenv_1 = require("dotenv");
// import ServerConnection from './db'
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const sockets_1 = __importDefault(require("./sockets"));
(0, dotenv_1.config)();
// ServerConnection()
const url = process.env.URL_WEB;
const port = process.env.PORT;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: url
    }
});
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
(0, sockets_1.default)(io);
server.listen(port, () => {
    console.log(`Estoy ejecutandome en http://localhost:${port}`);
});
