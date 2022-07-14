import express, { Express, Request, Response, Router } from "express";
import ClassController from "./../controllers/classController";

import ClassJoiSchema from "./../schemas/classSchema";
import CommonValidator from "./../middlewares/commonValidators";

const router: Router = express.Router();
const classJoiSchema: ClassJoiSchema = new ClassJoiSchema();
const commonValidator: CommonValidator = new CommonValidator();
const classController: ClassController = new ClassController();

router
  .route("/")
  .get(classController.getAllClasses)
  .post(
    commonValidator.validate(classJoiSchema.createSchema),
    classController.createClass
  );

router
  .route("/:id")
  .get(classController.getClass)
  .patch(
    commonValidator.validate(classJoiSchema.updateSchema),
    classController.updateClass
  )
  .delete(classController.deleteClass);

export default router;
