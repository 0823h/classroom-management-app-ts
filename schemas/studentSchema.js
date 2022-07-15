"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class JoiSchema {
    constructor() {
        this.createSchema = joi_1.default.object({
            name: joi_1.default
                .string()
                .pattern(new RegExp("^[a-zA-Z'-\\s]+$"))
                .min(1)
                .max(40)
                .required(),
            age: joi_1.default.number().min(1).max(100).required(),
            gender: joi_1.default.string().valid("male", "female"),
        });
        this.updateSchema = joi_1.default.object({
            name: joi_1.default.string().pattern(new RegExp("^[a-zA-Z'-\\s]+$")).min(1).max(40),
            age: joi_1.default.number().min(1).max(100),
            gender: joi_1.default.string().valid("male", "female"),
        });
    }
}
exports.default = JoiSchema;
