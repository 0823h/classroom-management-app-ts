import { Student } from "./../models/studentModel";
import express, { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
class StudentController {
  async createStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const student = await Student.create(req.body);
      return res.status(201).json({
        status: "success",
        data: {
          student,
        },
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async getAllStudents(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await Student.find();
      return res.status(200).json({
        status: "success",
        length: students.length,
        data: {
          students,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async getStudent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const student = await Student.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data: student,
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async updateStudent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const updatedStudent = await Student.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      return res.status(200).json({
        status: "success",
        data: {
          updatedStudent,
        },
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async deleteStudent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      await Student.findOneAndDelete({ _id: req.params.id });
      return res.status(204).json({
        status: "success",
        data: null,
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }
}
export default StudentController;
