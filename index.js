const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// const cors = require('cors');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const { validations } = require('./authMiddleware');

const talkerRouter = require('./routes/talkerRouter');

app.post('/calculate', emailValidation, passwordValidation, async (request, response) => {
  response.status(HTTP_OK_STATUS).json({ token: randomBytes(8).toString('hex') });
});

app.use('/talker', talkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
