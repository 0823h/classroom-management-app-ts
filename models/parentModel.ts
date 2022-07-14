import mongoose from "mongoose";

interface IParent {
  name: String;
  age: Number;
  gender: String;
}
const schema: mongoose.Schema = new mongoose.Schema<IParent>(
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
  },
  { timestamps: true }
);

export const Parent: mongoose.Model<IParent> = mongoose.model<IParent>(
  "Parent",
  schema
);
