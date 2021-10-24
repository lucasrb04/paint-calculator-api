const httpStatus = require('http-status');

const businessRules = require('./businessRules');

const WallsValidation = (walls) => {
  const isValidWall = walls.every((wall) => businessRules.validWall(wall.width, wall.height));
  if (!isValidWall) {
    return {
      code: httpStatus.BAD_REQUEST,
      message: 'Comprimento ou altura fora dos valores específicados.',
    };
  }
  return isValidWall;
};

const quadrilateralValidation = (walls) => {
  const arrayOfSides = walls.map((wall) => wall.width);
  const isValidQuadrilateral = businessRules.isQuadrilateral(...arrayOfSides);
  if (!isValidQuadrilateral) {
    return {
      code: httpStatus.BAD_REQUEST,
      message: 'Não é possível construir um quarto com paredes destes tamanhos.',
    };
  }
  return isValidQuadrilateral;
};

const openingsValidation = (roomInfo) => {
  const isValidOpening = businessRules.validOpenings(roomInfo);
  if (!isValidOpening) {
    return {
      code: httpStatus.BAD_REQUEST,
      message: 'Não é possível construir um quarto com esse número de portas e janelas.',
    };
  }
  return isValidOpening;
};

const validate = (roomInfo) => {
    const validWalls = WallsValidation(roomInfo.walls);
    if (!validWalls) return validWalls;

    const validQuadrilateral = quadrilateralValidation(roomInfo.walls);
    if (!validQuadrilateral) return validQuadrilateral;
  
    const validOpeningsArea = openingsValidation(roomInfo);
    if (!validOpeningsArea) return validOpeningsArea;
};

const calculateGallons = (roomInfo) => {
  const validation = validate(roomInfo);
  if (validation) return validation;
  const gallons = businessRules.calculateGallons(roomInfo);
  return gallons;
};

module.exports = { calculateGallons };
