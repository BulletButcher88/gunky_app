const audiencePage = (req, res) => {
  res.send("This will be a webpage one day.")
}

// Push the received data from the controller to the queue.
const audienceData = (req, res) => {
  musicData.push(req.body);
  console.log(`Current queue for band: ${queue}`);
}

const bandPage = (req, res) => {
  res.send("This will be a webpage one day.")
}

// Send the next item in the queue, remove it from the queue,
// and print the new queue to the server logs.
const bandData = (req, res) => {
  res.send(queue[0]);
  musicData = musicData.slice(1);
  console.log(`Current queue for band: ${queue}`);
}

module.exports = {
  audiencePage,
  audienceData,
  bandPage,
  bandData
}