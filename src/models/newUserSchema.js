import joi from "joi";

export const newUserSchema = joi.object({
    name: joi.string().required().min(4),
    email: joi.string().email().required().min(4),
    password: joi.string().required().min(4),
    confirmPassword: joi.ref("password"),
  });