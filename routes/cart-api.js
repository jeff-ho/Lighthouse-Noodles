const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/cart');

router.post('/', (req, res) => {
  console.log("there")
  itemQueries.addToOrder()
    .then(items => {
     console.log(items)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
