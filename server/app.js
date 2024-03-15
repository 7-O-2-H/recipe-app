// declarations
require('dotenv').config();
const {ENVIRONMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// routes
const recipeRoutes = require('./routes/recipes');

const app = express();

// middleware
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.json({greetings: 'hello'});
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));