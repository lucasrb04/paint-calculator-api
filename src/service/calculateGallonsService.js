const httpStatus = require('http-status');

const businessRules = require('./businessRules');

const quadrilateralValidation = (walls) => {
  const arrayOfSides = walls.map((wall) => wall.width);
  const isValidQuadrilateral = businessRules.isQuadrilateral(...arrayOfSides);
  if (!isValidQuadrilateral) {
    return {
      code: httpStatus.BAD_REQUEST,
      message: 'Does not exist a room with this dimensions.',
    };
  }
  return isValidQuadrilateral;
};

const openingsValidation = (roomInfo) => {
  const isValidOpening = businessRules.validOpenings(roomInfo);
  if (!isValidOpening) {
    return {
      code: httpStatus.BAD_REQUEST,
      message: 'It is not possible to build a room with this number of openings.',
    };
  }
  return isValidOpening;
};

const validate = (roomInfo) => {
  const validQuadrilateral = quadrilateralValidation(roomInfo.walls);
  if (validQuadrilateral.code) return validQuadrilateral;

  const validOpeningsArea = openingsValidation(roomInfo);
  if (validOpeningsArea.code) return validOpeningsArea;
};

const calculatePaintCans = (roomInfo) => {
  const validation = validate(roomInfo);
  if (validation) return validation;
  const gallons = businessRules.calculatePaintCans(roomInfo);
  return gallons;
};

module.exports = { calculatePaintCans };
