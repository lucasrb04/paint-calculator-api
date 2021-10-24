const isQuadrilateral = (a, b, c, d) => {
  // Para validar se os lados conseguem formar um quadrilátero, 
  // precisamos que um lado seja menor que a soma dos outros três.
  for (let index = 0; index < 4; index += 1) {
    const sides = [a, b, c, d]; // array com os lados
    const [sideToTest] = sides.splice(index, 1); // remove o lado que está sendo testado e salva em sideToTest
    const sumOfOtherSides = sides.reduce((acc, curr) => acc + curr); // soma os outros três lados
    // Comentários sobre a condição de existência de um quadrilátero:
    // https://www.mail-archive.com/obm-l@mat.puc-rio.br/msg34503.html
    if (sideToTest > sumOfOtherSides) {
      return false;
    }
  }   
  return true;
};

const validWall = (width, height) => {
  if (width < 1 || width > 15 || height < 2.2) {
    return false;
  } 
  return true;
};

const validOpeningsArea = (windowsNumber, doorsNumber, totalWallArea) => {
  const WINDOW_AREA = 2;
  const DOOR_AREA = 1.52;

  const totalOpeningsArea = (windowsNumber * WINDOW_AREA) + (doorsNumber * DOOR_AREA);

  if (totalOpeningsArea <= 0.5 * totalWallArea) {
    return totalWallArea - totalOpeningsArea;
  }
  return false;
};

// const areaToPaint = validOpeningsArea(2, 1, 10);

const paintCans = (paintArea) => {
  let litersOfPaint = paintArea / 5;
  const typeOfCans = [18, 3.6, 2.5, 0.5];
  const listOfCans = [];
    typeOfCans.forEach((canSize) => {
      while (litersOfPaint >= canSize) {
        litersOfPaint -= canSize;
        listOfCans.push(canSize);
      }
      if (litersOfPaint < 0.5 && litersOfPaint > 0) {
        listOfCans.push(0.5);
        litersOfPaint = 0;
      }
    });
  return listOfCans;
};

module.exports = {
  isQuadrilateral,
  validWall,
  validOpeningsArea,
  paintCans,
};
