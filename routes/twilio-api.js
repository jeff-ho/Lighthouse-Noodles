const express = require('express');
const router  = express.Router();
const sendText = require('../sms');

router.post('/', (req, res) => {
  let totalPrice = req.body.total;
 sendText.sendText(totalPrice)
 .then(items => {
      console.log('Text successfully sent')
    })
 .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
