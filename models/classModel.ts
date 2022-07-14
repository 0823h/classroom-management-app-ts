import mongoose, { InferSchemaType, Model, Schema } from "mongoose";
export interface IClass {
  name: String;
  numOfStudent: Number;
}
const schema: Schema = new Schema<IClass>(
  {
    name: {
      type: String,
      required: true,
    },
    numOfStudent: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Class: Model<IClass> = mongoose.model<IClass>("Class", schema);
