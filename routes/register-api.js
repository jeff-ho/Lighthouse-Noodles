const express = require("express");
const router = express.Router();
const itemQueries = require("../db/queries/users");
const cookieSession = require("cookie-session");

router.post("/", (req, res) => {
  let email = req.body.email;
  let userName = req.body.name;
  let phone = req.body.phone;

  let session = req.session;
  session.name = userName;
  session.phone = phone;
  session.email = email;

  itemQueries
    .addUser(email, userName, phone)
    .then((items) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
