const express = require('express');

const router = new express.Router();

router.get('/', audienceController);
router.get('/band', bandController);

module.exports = router;