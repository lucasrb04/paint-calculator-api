/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const { expect } = require('chai');

const businessRules = require('../../../service/businessRules');

describe('Testing isQuadrilateral function', () => {
  it('Returns true when the four parameters complete a quadrilateral', () => {
    const response = businessRules.isQuadrilateral(2, 2, 2, 2);

    expect(response).to.be.equals(true);
  });

  it('Returns false when one of the sides are greater than sum of the other three', () => {
    const response = businessRules.isQuadrilateral(2, 10, 2, 2);

    expect(response).to.be.equals(false);
  });
});
  
describe('Testing area functions', () => {
  const wallsArray = [
    {
      height: 2,
      width: 2,
    },
    {
      height: 2,
      width: 2,
    },
    {
      height: 2,
      width: 2,
    },
    {
      height: 2,
      width: 2,
    },
  ];

  const openingObj = {
    windows: 2,
    doors: 2,
  };
  describe('Testing wallsArea function', () => {
    const TOTAL_WALLS_AREA = 16;

    it('Returns the area of the walls ', () => {
      const roomArea = businessRules.wallsArea(wallsArray);

      expect(roomArea).to.be.equals(TOTAL_WALLS_AREA);
    });
  });

  describe('Testing openingsArea function', () => {
    const TOTAL_OPENINGS_AREA = 7.04;

    it('Returns the area of the openings ', () => {
      const openingsArea = businessRules.openingsArea(openingObj);

      expect(openingsArea).to.be.equal(TOTAL_OPENINGS_AREA);
    });
  });

  describe('Testing validOpenings function', () => {
    const roomInfo = {
      walls: wallsArray,
      openings: openingObj,
      };

    it('Returns true when the area of the openings is smaller than 50% of the walls area. ', () => {
      const validOpenings = businessRules.validOpenings(roomInfo);

      expect(validOpenings).to.be.equals(true);
    });
    it('Returns false when the area of the openings is greater than 50% of the walls area. ', () => {
      roomInfo.openings.doors = 6;
      const validOpenings = businessRules.validOpenings(roomInfo);

      expect(validOpenings).to.be.equals(false);
    });
  });
});

describe('Testing countCans function', () => {
  const gallonsArray = [1, 1, 1, 2];
  const REPEATED_NUMBER = 1;
  it('Returns 3 when we have a array with 3 repeated number', () => {
    const response = businessRules.countCans(gallonsArray, REPEATED_NUMBER);

    expect(response).to.be.equals(3);
  });
});

describe('Testing formatCans function', () => {
  const gallonsArray = [18, 18, 3.6, 3.6, 2.5, 2.5, 0.5, 0.5];
  const formattedGallons = {
    '18L': 2,
    '3.6L': 2,
    '2.5L': 2,
    '0.5L': 2,
  };
  it('Returns a object with the number of the each type of the gallon in array', () => {
    const response = businessRules.formatCans(gallonsArray);

    expect(response).to.be.deep.equal(formattedGallons);
  });
});

describe('Testing calculatePaintCans function', () => {
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
  const formattedGallons = {
    '18L': 0,
    '3.6L': 1,
    '2.5L': 1,
    '0.5L': 1,
  };

  it('Returns a object with the number of the each type of the gallon in array', () => {
    const response = businessRules.calculatePaintCans(roomInfo);

    expect(response).to.be.deep.equal(formattedGallons);
  });
});
