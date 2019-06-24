const express = require('express');
const { audienceController, bandController } = require('./controllers')

const router = new express.Router();

router.get('/', audienceController);
router.get('/band', bandController);

module.exports = router;