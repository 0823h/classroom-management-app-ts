"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class JoiSchema {
    constructor() {
        this.nameRegex = /^[a-z ,.'-]+$/i;
        this.createSchema = joi_1.default.object({
            name: joi_1.default
                .string()
                .pattern(new RegExp(this.nameRegex))
                .min(1)
                .max(40)
                .required(),
            numOfStudent: joi_1.default.number().min(1).max(100).required(),
        });
        this.updateSchema = joi_1.default.object({
            name: joi_1.default.string().pattern(new RegExp(this.nameRegex)).min(1).max(40),
            numOfStudent: joi_1.default.number().min(1).max(100),
        });
    }
}
exports.default = JoiSchema;
