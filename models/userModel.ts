import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

interface IUser {
  name: String;
  email: String;
  password: String;
}

const schema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name cannot be empty"],
    },
    email: {
      type: String,
      required: [true, "Email cannot be empty"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  { timestamps: true }
);

export const User: Model<IUser> = mongoose.model<IUser>("User", schema);
