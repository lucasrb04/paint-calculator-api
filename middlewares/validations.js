const validQuadrilateral = (a, b, c, d) => {
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

walls = {
  wall1: {
    width: 5,
    height: 2.2,
  },
  wall2: {
    width: 5,
    height: 2.2,
  },
  wall3: {
    width: 5,
    height: 2.2,
  },
  wall4: {
    width: 5,
    height: 2.2,
  },
}

const WallValidation = (req, res, next) => {
  const { walls } = req.body;
  const validWalls = [];

  walls.forEach((wall) => {



  const validWall

  
  if (!password || password === '') { 
    return res.status(400).json({ message: 'O campo "password" é obrigatório' }); 
}
  
  if (password.length < 6) { 
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
}

  next();
};


