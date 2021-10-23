const validQuadrilateral = (a, b, c, d) => {
  // Para validar se os lados conseguem formar um quadrilátero, 
  // precisamos que um lado seja menor que a soma dos outros três.
  for (let index = 0; index < 4; index += 1) {
    const sides = [a, b, c, d]; // array com os lados
    const [sideToTest] = sides.splice(index, 1); // remove o lado que está sendo testado e salva em sideToTest
    const sumOfOtherSides = sides.reduce((acc, curr) => acc + curr); // soma os outros três lados
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
  const totalWindowArea = windowsNumber * WINDOW_AREA;
  const DOOR_AREA = 1.52;
  const totalDoorArea = doorsNumber * DOOR_AREA;
  const totalOpeningsArea = totalWindowArea + totalDoorArea;
  if (totalOpeningsArea <= 0.5 * totalWallArea) {
    return totalWallArea - totalOpeningsArea;
  }
  return false;
};

const areaToPaint = 50;
// const areaToPaint = validOpeningsArea(2, 1, 10);

const paintCans = (paintArea) => {
  let litersOfPaint = paintArea / 5;
  const typeOfCans = [18, 3.6, 2.5, 0.5];
  const listOfCans = [];
  while (litersOfPaint >= 0.5) {
    typeOfCans.forEach((canSize) => {
      if (litersOfPaint >= canSize) {
        litersOfPaint -= canSize;
        listOfCans.push(canSize);
      }
  });
  }
  return listOfCans;
};
