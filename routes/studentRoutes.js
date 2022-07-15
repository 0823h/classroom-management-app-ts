"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = __importDefault(require("./../controllers/studentController"));
const commonValidators_1 = __importDefault(require("./../middlewares/commonValidators"));
const studentSchema_1 = __importDefault(require("./../schemas/studentSchema"));
const commonValidators = new commonValidators_1.default();
const studentJoiSchema = new studentSchema_1.default();
const router = express_1.default.Router();
const studentController = new studentController_1.default();
router
    .route("/")
    .get(studentController.getAllStudents)
    .post(commonValidators.validate(studentJoiSchema.createSchema), studentController.createStudent);
router
    .route("/:id")
    .get(studentController.getStudent)
    .patch(commonValidators.validate(studentJoiSchema.updateSchema), studentController.updateStudent)
    .delete(studentController.deleteStudent);
exports.default = router;
