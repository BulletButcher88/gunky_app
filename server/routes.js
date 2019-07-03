const express = require('express');
const { audiencePage, audienceData, bandPage, bandData } = require('./controllers')


const router = new express.Router();

// First endpoint sends the HTML page for the audience
// Second endpoint is where the JS posts new data for queueing
router.get('/', audiencePage)
router.post('/', audienceData);

// First endpoint sends the HTML page for the band
// Second endpoint is where the JS requests the next item in queue
router.get('/band', bandPage);
router.get('/band-next-item', bandData)

module.exports = router;