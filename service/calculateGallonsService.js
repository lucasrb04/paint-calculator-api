const httpStatus = require('http-status');

const businessRules = require('./ businessRules');

const validWall = (width, height) => {
  if (width < 1 || width > 15 || height < 2.2) {
    return false;
  } 
  return true;
};

const WallsValidation = (walls) => {
  const WallArray = [...walls];
  const isValidWall = WallArray.every((wall) => businessRules.validWall(wall.width, wall.height));
  if (!isValidWall) {
    return {
      code: httpStatus.BAD_REQUEST,
      error: 'Comprimento ou altura fora dos valores específicados.',
    };
  }
};

const quadrilateralValidation = (walls) => {
  const arrayOfSides = [...walls].map((wall) => wall.width);
  const isValidQuadrilateral = businessRules.isQuadrilateral(...arrayOfSides);
  if (!isValidQuadrilateral) {
    return {
      code: httpStatus.BAD_REQUEST,
      error: 'Não é possível construir um quadrilátero com esses lados.',
    };
  }
};

const calculate = (walls) => {
  const validWalls = WallsValidation(walls);
  if (!validWalls) return validWalls;

  const validQuadrilateral = quadrilateralValidation(walls);
  if (!validQuadrilateral) return validQuadrilateral;
};

module.exports = { calculate };