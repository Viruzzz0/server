"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function ServerConnection() {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DB } = process.env;
    const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@chat-socket.vqbi9vo.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;
    (0, mongoose_1.connect)(url)
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch(err => console.error(err));
}
exports.default = ServerConnection;
