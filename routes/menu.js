const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const templateVars = {
    user: req.session.name,
  };
  res.render("menu", templateVars);
});

module.exports = router;
