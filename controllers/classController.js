"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const classModel_1 = require("./../models/classModel");
const studentModel_1 = require("../models/studentModel");
class ClassController {
    createClass(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newClass = yield classModel_1.Class.create(req.body);
                res.status(200).json({
                    status: "success",
                    data: newClass,
                });
            }
            catch (err) {
                res.status(400).json({
                    status: "error",
                    data: null,
                });
            }
        });
    }
    getAllClasses(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const classes = yield classModel_1.Class.find();
                return res.status(200).json({
                    status: "success",
                    length: classes.length,
                    data: {
                        classes,
                    },
                });
            }
            catch (err) {
                return res.status(400).json({
                    status: "error",
                    message: err,
                });
            }
        });
    }
    getClass(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gettedClass = yield classModel_1.Class.findById(req.params.id);
                return res.status(200).json({
                    status: "success",
                    data: {
                        class: gettedClass,
                    },
                });
            }
            catch (err) {
                return res.status(400).json({
                    status: "error",
                    message: err,
                });
            }
        });
    }
    updateClass(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedClass = yield classModel_1.Class.findOneAndUpdate({ _id: req.params.id }, req.body, {
                    new: true,
                });
                return res.status(200).json({
                    status: "success",
                    data: updatedClass,
                });
            }
            catch (err) {
                return res.status(400).json({
                    status: "error",
                    message: err,
                });
            }
        });
    }
    deleteClass(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                studentModel_1.Student.findOneAndDelete({ _id: req.params.id });
                return res.status(204).json({
                    status: "success",
                    data: null,
                });
            }
            catch (err) {
                return res.status(400).json({
                    status: "error",
                    message: err,
                });
            }
        });
    }
}
exports.default = ClassController;
