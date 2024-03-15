// declarations
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 8080;
const environment = 'dev';

const app = express();

// middleware
app.use(morgan(environment));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({greetings: 'hello'});
})

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));