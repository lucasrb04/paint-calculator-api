const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');

require('dotenv').config();

const { calculateGallonsService } = require('./src/service');

const PORT = process.env.PORT || 3000;

const app = express();

// https://medium.com/@alexandremjacques/entendendo-o-cors-parte-8331d0a777e1#.2hy2429si
app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (request, response) => {
  const { walls } = request.body;

  const paintGallons = calculateGallonsService.calculate(walls);

  if (paintGallons.message) {
    response.status(paintGallons.code).send(paintGallons.message);
  }

    response.status(httpStatus.HTTP_OK_STATUS).json(paintGallons);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
