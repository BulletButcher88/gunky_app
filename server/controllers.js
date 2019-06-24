// Push the received data from the controller to the queue.
const audienceController = (req, res) => {
  musicData.push(req.body);
  console.log(`Current queue for band: ${queue}`);
}

// Send the next item in the queue, remove it from the queue,
// and print the new queue to the server logs.
const bandController = (req, res) => {
  res.send(queue[0]);
  musicData = musicData.slice(1);
  console.log(`Current queue for band: ${queue}`);
}

module.exports = {
  audienceController,
  bandController
}