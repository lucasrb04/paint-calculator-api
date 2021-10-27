const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');

require('dotenv').config();

const { calculatePaintCans } = require('./src/service/calculateGallonsService');
const { roomValidator } = require('./src/middleware/validations');

const PORT = process.env.PORT || 4000;

const app = express();

// https://medium.com/@alexandremjacques/entendendo-o-cors-parte-8331d0a777e1#.2hy2429si
app.use(cors());
app.use(bodyParser.json());

const WELCOME_MSG = 'Welcome to the Paint Calculator Api, post the datas of the room in /calculate';

app.get('/', (req, res) => {
    res.status(httpStatus.OK).send(WELCOME_MSG);
});

app.post('/calculate', roomValidator, (request, response) => {
  const roomInfo = request.body;

  const paintCans = calculatePaintCans(roomInfo);
  if (paintCans.message) {
    return response.status(paintCans.code).send({ message: paintCans.message });
  }
  return response.status(httpStatus.OK).json(paintCans);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
