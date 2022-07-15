"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const classController_1 = __importDefault(require("./../controllers/classController"));
const classSchema_1 = __importDefault(require("./../schemas/classSchema"));
const commonValidators_1 = __importDefault(require("./../middlewares/commonValidators"));
const router = express_1.default.Router();
const classJoiSchema = new classSchema_1.default();
const commonValidator = new commonValidators_1.default();
const classController = new classController_1.default();
router
    .route("/")
    .get(classController.getAllClasses)
    .post(commonValidator.validate(classJoiSchema.createSchema), classController.createClass);
router
    .route("/:id")
    .get(classController.getClass)
    .patch(commonValidator.validate(classJoiSchema.updateSchema), classController.updateClass)
    .delete(classController.deleteClass);
exports.default = router;
