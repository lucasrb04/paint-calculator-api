const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');

require('dotenv').config();

const { calculateGallons } = require('./src/service/calculateGallonsService');
const { roomValidator } = require('./src/middleware/validations');

const PORT = process.env.PORT || 3000;

const app = express();

// https://medium.com/@alexandremjacques/entendendo-o-cors-parte-8331d0a777e1#.2hy2429si
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(httpStatus.OK).send('Hello World');
});

app.post('/calculate', roomValidator, (request, response) => {
  const roomInfo = request.body;

  const paintGallons = calculateGallons(roomInfo);
  if (paintGallons.message) {
    response.status(paintGallons.code).send({ message: paintGallons.message });
  }
  console.log(paintGallons);

  response.status(httpStatus.OK).json(paintGallons);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
