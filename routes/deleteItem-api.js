const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/checkout');


router.post('/', (req, res) => {
  let item = req.body.cart_id;
  itemQueries.deleteOneItem(item)
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
