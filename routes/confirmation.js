const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const templateVars = {
    user: req.session.name,
  };
  res.render("confirmation-page", templateVars);
});

module.exports = router;
