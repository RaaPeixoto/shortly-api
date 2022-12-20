import joi from "joi";

const newUrlSchema = joi.object({
  url: joi.string().required()
});

export default newUrlSchema;