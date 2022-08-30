const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/cart');

router.post('/', (req, res,) => {
  console.log("there", req.body)
  console.log('current test', req.body)
  const myIDNumber = req.body.click
  console.log(myIDNumber, 'checking')
  console.log(req.body,'fdsfadsfdsfsadfsda')

  itemQueries.addToOrder(myIDNumber)

    .then(items => {
     console.log("ITEM ADDED TO CART")
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
