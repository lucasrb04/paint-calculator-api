const Joi = require('@hapi/joi');
const httpStatus = require('http-status');

const wallsValidator = (req) => {
  const wall = Joi.object().keys({
    height: Joi.number().min(2.2).required(),
    width: Joi.number().min(1).max(15).required(),
  });

  const walls = Joi.array().items(wall).length(4);

  const { error } = walls.validate(req.body.walls);

  if (error) return error.details[0].message;
};

const openingsValidator = (req) => {
  const openings = Joi.object().keys({
    doors: Joi.number().min(1).required(),
    windows: Joi.number().min(1).required(),
  });

  const { error } = openings.validate(req.body.openings);

  if (error) return error.details[0].message;
};

const fieldsValidator = (req) => {
  const fields = Joi.object().keys({
    walls: Joi.array().required(),
    openings: Joi.object().required(),
  });

  const { error } = fields.validate(req.body);
  
  if (error) return error.details[0].message;
};

const roomValidator = async (req, res, next) => {
  const error = await wallsValidator(req) 
    || await openingsValidator(req) 
    || await fieldsValidator(req);

  if (error) return res.status(httpStatus.BAD_REQUEST).json({ message: error });
  next();
};

module.exports = { roomValidator };