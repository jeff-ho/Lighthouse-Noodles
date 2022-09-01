const express = require("express");
const router = express.Router();
const itemQueries = require("../db/queries/order");

router.post("/", (req, res) => {
  itemQueries
    .sendOrder(cartId, quantity)
    .then((items) => {
      res.json({ items });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
