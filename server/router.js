const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/auth',controller.api.verifyLogin);
router.post('/login',controller.api.doLogin);
router.post('/accounts/emailsignup',controller.api.doRegister);



module.exports = router;