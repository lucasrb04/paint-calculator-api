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

const wallsArea = (walls) => {
  const totalwallsArea = walls.reduce((sum, wall) => sum + wall.width * wall.height, 0);
  return totalwallsArea;
};

const openingsArea = (openings) => {
  const WINDOW_AREA = 2;
  const DOOR_AREA = 1.52;

  const totalOpeningArea = (openings.windows * WINDOW_AREA) + (openings.doors * DOOR_AREA);
  return totalOpeningArea;
};

const validOpenings = (roomInfo) => {
  const { walls, openings } = roomInfo;

  const totalWallArea = wallsArea(walls);
  const totalOpeningsArea = openingsArea(openings);

  if (totalOpeningsArea <= 0.5 * totalWallArea) return true;
  return false;
};

const countCans = (array, number) => array.reduce((acc, curr) => {
    if (curr === number) {
      return acc + 1;
    }
    return acc;
  }, 0);

const formatCans = (gallons) => ({
  '18L': countCans(gallons, 18),
  '3.6L': countCans(gallons, 3.6),
  '2.5L': countCans(gallons, 2.5),
  '0.5L': countCans(gallons, 0.5),
});

const calculatePaintCans = (roomInfo) => {
  const paintArea = wallsArea(roomInfo.walls) - openingsArea(roomInfo.openings);
  
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
  return formatCans(listOfCans);
};

module.exports = {
  isQuadrilateral,
  wallsArea,
  openingsArea,
  validOpenings,
  calculatePaintCans,
};
