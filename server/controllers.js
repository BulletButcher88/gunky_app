
// musicData is a First-In-First-Out queue. This means that the first
// items to be pushed onto the array are also the first to be shifted off of it.
// As the server receives new JSON data from the remote controller it will
// push these to the array, and it will shift off the first item and send it
// back in response to GET requests on the band's endpoint.
//
// TO BAND <-- [item, item, item] <-- FROM AUDIENCE

const musicData = [];

const audiencePage = (req, res) => {
  res.send("This will be a webpage one day.")
}

// Push the received data from the controller to the queue.
const audienceData = (req, res) => {
  musicData.push(req.body);
  console.log(`Current queue for band:`);
  console.log(musicData);
}

const bandPage = (req, res) => {
  res.send("This will be a webpage one day.")
}

// Send the next item in the queue, remove it from the queue,
// and print the new queue to the server logs.
const bandData = (req, res) => {
  res.send(musicData[0]);
  musicData = musicData.slice(1);
  console.log(`Current queue for band: ${musicData}`);
}

module.exports = {
  audiencePage,
  audienceData,
  bandPage,
  bandData
}