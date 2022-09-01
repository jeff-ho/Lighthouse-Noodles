const express = require("express");
const router = express.Router();
const sendText = require("../sms");

router.post("/", (req, res) => {
  let totalPrice = req.body.total;
  let cartArray = req.session.cartItems;
  let name = req.session.name;
  let date = new Date(Date.now());
  let currentDate = date.toString();
  let restaurantString = `New order for ${name}! ${currentDate}`;

  for (const item of cartArray) {
    let dish = item.name;
    let quantity = item.quantity;
    let tempString = `${quantity} x ${dish}`;
    restaurantString = restaurantString + " | " + tempString;
  }

  restaurantString = restaurantString + ` | Total Price: $${totalPrice} |`;

  sendText.sendTextToUser(totalPrice);

  sendText.sendTextToRestaurant(restaurantString);
});

module.exports = router;
