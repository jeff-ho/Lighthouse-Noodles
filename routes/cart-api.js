const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/cart');

router.post('/', (req, res,) => {
  const myIDNumber = req.body.click


  itemQueries.addToOrder(myIDNumber)

    .then(items => {
     console.log("ITEM ADDED TO CART")
      res.send()
      //need res.send to let them server know a response is made. 
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;

