import { Class, IClass } from "./../models/classModel";
import express, { Express, Request, Response, NextFunction } from "express";
import { Student } from "../models/studentModel";
class ClassController {
  async createClass(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newClass = await Class.create(req.body);
      res.status(200).json({
        status: "success",
        data: newClass,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        data: null,
      });
    }
  }

  async getAllClasses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<express.Response> {
    try {
      const classes = await Class.find();
      return res.status(200).json({
        status: "success",
        length: classes.length,
        data: {
          classes,
        },
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async getClass(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const gettedClass: IClass | null = await Class.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data: {
          class: gettedClass,
        },
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async updateClass(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const updatedClass = await Class.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({
        status: "success",
        data: updatedClass,
      });
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err,
      });
    }
  }

  async deleteClass(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      Student.findOneAndDelete({ _id: req.params.id });
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

export default ClassController;
