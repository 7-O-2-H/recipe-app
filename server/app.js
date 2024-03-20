// declarations
require('dotenv').config();
const {ENVIRONMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// routes
const recipeRoutes = require('./routes/recipes');
const ingredientsRoutes = require('./routes/ingredients');
const userRoutes = require('./routes/users');
const tagRoutes = require('./routes/tags');
const favouritesRoutes = require('./routes/favourites');

const app = express();

// middleware
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/users', userRoutes);
app.use('/tags', tagRoutes);
app.use('/favourites', favouritesRoutes);

app.get('/', (req, res) => {
  res.json({greetings: 'hello'});
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));