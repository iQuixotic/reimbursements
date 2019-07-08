const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4044;
const app = express();
const routes = require('./app/routes');

// Define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

// app.use('/', (req, res, next) => {
//     res.json({message: 'Hello from express'})
//     next();
// });

// listen on port PORT
app.listen(PORT, () => {
  console.log(`You know that I will always be there for you on port ${PORT}`);
});