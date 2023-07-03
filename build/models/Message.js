"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Crea un modelo de usuario
const collectionsSchema = new mongoose_1.Schema({
    user: String,
    collections: Array,
    auth: Object,
    uid: String
});
const Message = (0, mongoose_1.model)('Message', collectionsSchema);
exports.default = Message;
