import express, { Express, Request, Response } from "express";
import StudentController from "./../controllers/studentController";

import CommonValidator from "./../middlewares/commonValidators";
import StudentJoiSchema from "./../schemas/studentSchema";

const commonValidators: CommonValidator = new CommonValidator();
const studentJoiSchema: StudentJoiSchema = new StudentJoiSchema();

const router = express.Router();
const studentController = new StudentController();
router
  .route("/")
  .get(studentController.getAllStudents)
  .post(
    commonValidators.validate(studentJoiSchema.createSchema),
    studentController.createStudent
  );

router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(
    commonValidators.validate(studentJoiSchema.updateSchema),
    studentController.updateStudent
  )
  .delete(studentController.deleteStudent);
export default router;
