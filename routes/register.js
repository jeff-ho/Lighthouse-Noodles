const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let templateVars = {};
  if (req.session) {
    templateVars = { user: req.session.name };
  }
  res.render("register", templateVars);
});

module.exports = router;
