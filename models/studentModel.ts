import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

interface IStudent {
  name: String;
  age: Number;
  gender: String;
  class: mongoose.Schema.Types.ObjectId;
  parent: mongoose.Schema.Types.ObjectId;
}
const schema: Schema = new Schema<IStudent>(
  {
    name: {
      type: String,
      required: [true, "Name cannot be empty"],
    },
    age: {
      type: Number,
      required: [true, "Age cannot be empty"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Gender cannot be empty"],
    },
    class: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
    parent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Parent" }],
  },
  { timestamps: true }
);

export const Student: Model<IStudent> = mongoose.model<IStudent>(
  "Student",
  schema
);
