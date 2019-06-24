const audienceController = (req, res) => {
  musicData.push(req.body);
  console.log(`Current queue for band: ${queue}`);
}

const bandController = (req, res) => {
  res.send(queue[0]);
  musicData = musicData.slice(1);
  console.log(`Current queue for band: ${queue}`);
}

module.exports = {
  audienceController,
  bandController
}