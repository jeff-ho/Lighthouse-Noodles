const express = require("express");
const router = express.Router();
const itemQueries = require("../db/queries/cart");

router.post("/", (req, res) => {
  let quantity = req.body.quant;
  let cartId = req.body.cart_id;

  itemQueries
    .updateQuantity(cartId, quantity)
    .then((items) => {
      res.json({ items });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
