const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/test',controller.api.getData);



module.exports = router;