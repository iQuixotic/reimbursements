// pacakages
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// internal files and variables
const PORT = process.env.PORT || 4044;
const routes = require('./app/routes');

// Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

// listen on port PORT
app.listen(PORT, () => {
  console.log(`You know that I will always be there for you on port ${PORT}`);
});