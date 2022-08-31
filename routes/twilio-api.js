const express = require('express');
const router  = express.Router();
const sendText = require('../sms');

router.post('/', (req, res) => {
  let totalPrice = req.body.total;
 sendText.sendText(totalPrice)
});

module.exports = router;
