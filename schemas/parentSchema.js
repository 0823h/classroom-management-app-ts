"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi_1 = __importDefault(require("Joi"));
class JoiSchema {
    constructor() {
        this.createSchema = Joi_1.default.object({
            name: Joi_1.default
                .string()
                .pattern(new RegExp("^[a-zA-Z'-\\s]+$"))
                .min(1)
                .max(40)
                .required(),
            age: Joi_1.default.number().min(1).max(100).required(),
            gender: Joi_1.default.string().valid("male", "female"),
        });
        this.updateSchema = Joi_1.default.object({
            name: Joi_1.default.string().pattern(new RegExp("^[a-zA-Z'-\\s]+$")).min(1).max(40),
            age: Joi_1.default.number().min(1).max(100),
            gender: Joi_1.default.string().valid("male", "female"),
        });
    }
}
exports.default = JoiSchema;
