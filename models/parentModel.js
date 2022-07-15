"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"],
    },
    age: {
        type: Number,
        required: [true, "Age cannot be empty"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Gender cannot be empty"],
    },
}, { timestamps: true });
exports.Parent = mongoose_1.default.model("Parent", schema);
