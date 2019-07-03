// Import the dependencies
const express = require('express');
const cors = require('cors')

const routes = require('./routes')

// Define server
const server = express();
const port = 3000;

// musicData is a First-In-First-Out queue. This means that the first
// items to be pushed onto the array are also the first to be shifted off of it.
// As the server receives new JSON data from the remote controller it will
// push these to the array, and it will shift off the first item and send it
// back in response to GET requests on the band's endpoint.
//
// TO BAND <-- [item, item, item] <-- FROM AUDIENCE
const musicData = [];

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