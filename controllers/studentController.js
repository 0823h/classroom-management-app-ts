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
const studentModel_1 = require("./../models/studentModel");
class StudentController {
    createStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield studentModel_1.Student.create(req.body);
                return res.status(201).json({
                    status: "success",
                    data: {
                        student,
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
    getAllStudents(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield studentModel_1.Student.find();
                return res.status(200).json({
                    status: "success",
                    length: students.length,
                    data: {
                        students,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return res.status(400).json({
                    status: "error",
                    message: err,
                });
            }
        });
    }
    getStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield studentModel_1.Student.findById(req.params.id);
                return res.status(200).json({
                    status: "success",
                    data: student,
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
    updateStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedStudent = yield studentModel_1.Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
                return res.status(200).json({
                    status: "success",
                    data: {
                        updatedStudent,
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
    deleteStudent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield studentModel_1.Student.findOneAndDelete({ _id: req.params.id });
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
exports.default = StudentController;
