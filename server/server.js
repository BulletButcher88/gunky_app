// Import the dependencies
const express = require('express');
const cors = require('cors')

const routes = require('./routes')

// Define server
const server = express();
const port = 3000;


// Use middleware to allow CORS, and transmission of JSON and form data.
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

// Use the routes defined in routes.js
server.use(routes);

server.get('/', function (req, res) {
console.log(res.body)
})

server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})