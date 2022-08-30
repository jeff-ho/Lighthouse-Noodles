const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/checkout');

router.get('/', (req, res) => {
  //console.log(req.body, 'request')
  console.log(res, 'response')
  itemQueries.addToCheckout()
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
