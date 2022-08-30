const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/checkout');

router.post('/', (req, res) => {

  let itemId = req.body.click;
  console.log(itemId, 'mdaspomdpasdmapsomdpsaodmsapodmapsmpdp')

  itemQueries.addOneToItem(itemId)
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
