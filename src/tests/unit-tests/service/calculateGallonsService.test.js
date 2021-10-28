/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const { expect } = require('chai');

const calculateService = require('../../../service/calculateGallonsService');

const roomInfo = {
  walls: [
    {
      height: 3,
      width: 2,
    },
    {
      height: 3,
      width: 2,
    },
    {
      height: 3,
      width: 4,
    },
    {
      height: 3,
      width: 4,
    },
  ],
  openings: {
    doors: 1,
    windows: 1,
  },
};

describe('Testing quadrilateralValidation function', () => {
  it('Returns true when the walls sides complete a quadrilateral', () => {
    const response = calculateService.quadrilateralValidation(roomInfo.walls);

    expect(response).to.be.equals(true);
  });

  it('Returns a error when one of the sides are greater than sum of the other three', () => {
    // cria uma cópia do quarto para ser editado, sem isso, o valor original será alterado
    const edditedRoomInfo = JSON.parse(JSON.stringify(roomInfo));
    edditedRoomInfo.walls[0].width = 14;
    const response = calculateService.quadrilateralValidation(edditedRoomInfo.walls);

    expect(response.code).to.be.equals(400);
    expect(response.message).to.be.equals('Does not exist a room with this dimensions.');
  });
});

describe('Testing openingsValidation function', () => {
  it('Returns true when the openings has a valid value', () => {
    const response = calculateService.openingsValidation(roomInfo);

    expect(response).to.be.equals(true);
  });

  it('Returns a error when the openings has not a valid value', () => {
    const edditedRoomInfo = JSON.parse(JSON.stringify(roomInfo));
    edditedRoomInfo.openings.doors = 15;
    const response = calculateService.openingsValidation(edditedRoomInfo);

    expect(response.code).to.be.equals(400);
    expect(response.message).to.be.equals('It is not possible to build a room with this number of openings.');
  });
});

describe('Testing calculatePaintCans function', () => {
  it('Returns a object with the number of the each type of the gallon in array', () => {
    const formattedGallons = {
      '18L': 0,
      '3.6L': 1,
      '2.5L': 1,
      '0.5L': 1,
    };
    const response = calculateService.calculatePaintCans(roomInfo);

    expect(response).to.be.deep.equal(formattedGallons);
  });

  it('Returns a error when the sides are not a quadrilateral', () => {
    // cria uma cópia do quarto para ser editado, sem isso, o valor original será alterado
    const edditedRoomInfo = JSON.parse(JSON.stringify(roomInfo));
    edditedRoomInfo.walls[0].width = 14;

    const response = calculateService.calculatePaintCans(edditedRoomInfo);

    expect(response.code).to.be.equals(400);
    expect(response.message).to.be.equals('Does not exist a room with this dimensions.');
  });

  it('Returns a error when the openings are not valid', () => {
    // cria uma cópia do quarto para ser editado, sem isso, o valor original será alterado
    const edditedRoomInfo = JSON.parse(JSON.stringify(roomInfo));
    edditedRoomInfo.openings.doors = 15;

    const response = calculateService.calculatePaintCans(edditedRoomInfo);

    expect(response.code).to.be.equals(400);
    expect(response.message).to.be.equals('It is not possible to build a room with this number of openings.');
  });
});
