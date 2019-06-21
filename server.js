// Import the dependencies
const express = require('express');
const cors = require('cors')

// Define server
const server = express();
const port = 3000;

// Use middleware to allow CORS, and transmission of JSON and form data.
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

server.listen(port, () => {
    `Listening on port ${port}...`
})