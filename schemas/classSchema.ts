import joi from "joi";
class JoiSchema {
  nameRegex: RegExp = /^[a-z ,.'-]+$/i;
  createSchema: joi.ObjectSchema = joi.object({
    name: joi
      .string()
      .pattern(new RegExp(this.nameRegex))
      .min(1)
      .max(40)
      .required(),
    numOfStudent: joi.number().min(1).max(100).required(),
  });
  updateSchema: joi.ObjectSchema = joi.object({
    name: joi.string().pattern(new RegExp(this.nameRegex)).min(1).max(40),
    numOfStudent: joi.number().min(1).max(100),
  });
}
export default JoiSchema;
