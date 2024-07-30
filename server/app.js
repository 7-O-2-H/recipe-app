// declarations
require('dotenv').config();
const {ENVIRONMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const recipeRoutes = require('./routes/recipes');
const ingredientsRoutes = require('./routes/ingredients');
const userRoutes = require('./routes/users');
const tagRoutes = require('./routes/tags');
const favouriteRoutes = require('./routes/favourites');
const measurementsRoutes = require('./routes/measurements');
const verificationRouter = require('./routes/tokenVerification');
const stepsRoutes = require('./routes/steps');

const app = express();

// middleware
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000', '192.168.40.2:3000']
}));

app.use('/recipes', recipeRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/users', userRoutes);
app.use('/tags', tagRoutes);
app.use('/favourites', favouriteRoutes);
app.use('/measurements', measurementsRoutes);
app.use('/verification', verificationRouter);
app.use('/steps', stepsRoutes);

// app.get('/', (req, res) => {
//   res.json({greetings: 'hello'});
// })

app.listen(PORT, '0.0.0.0', () => console.log(`server listening on port: ${PORT}`));