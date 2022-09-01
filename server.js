// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cookieSession = require("cookie-session");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));
app.use(
  cookieSession({
    name: "session",
    keys: ["hello"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
//const widgetApiRoutes = require('./routes/widgets-api');
const menuRoutes = require("./routes/menu");
const registerRoutes = require("./routes/register");
const checkoutRoutes = require("./routes/checkout");
const appApiRoutes = require("./routes/appetizer-api");
const noodleApiRoutes = require("./routes/noodle-api");
const snackApiRoutes = require("./routes/snack-api");
const drinkApiRoutes = require("./routes/drink-api");
const cartApiRoutes = require("./routes/cart-api");
const checkoutApiRoutes = require("./routes/checkout-api");
const updateItemQuantityApiRoutes = require("./routes/quantity-item-api");
const addOneApiRoutes = require("./routes/addOne-api");
const submitOrderRoutesApi = require("./routes/order-api");
const twilioSendRoutesApi = require("./routes/twilio-api");
const deleteItemRoutesApi = require("./routes/deleteItem-api");
const registerRoutesApi = require("./routes/register-api");
const logoutRoutes = require("./routes/logout");
const confirmationRoutes = require("./routes/confirmation");
const clearCartRoutes = require("./routes/clear-cart-api");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/menu", menuRoutes);
app.use("/register", registerRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/api/menu/app", appApiRoutes);
app.use("/api/menu/noodle", noodleApiRoutes);
app.use("/api/menu/snack", snackApiRoutes);
app.use("/api/menu/drink", drinkApiRoutes);
app.use("/api/menu/cart", cartApiRoutes);
app.use("/api/checkout", checkoutApiRoutes);
app.use("/api/quantity", updateItemQuantityApiRoutes);
app.use("/api/addOne", addOneApiRoutes);
app.use("/api/order", submitOrderRoutesApi);
app.use("/api/twilio", twilioSendRoutesApi);
app.use("/api/delete", deleteItemRoutesApi);
app.use("/api/register", registerRoutesApi);
app.use("/logout", logoutRoutes);
app.use("/confirmation", confirmationRoutes);
app.use("/api/clear", clearCartRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const templateVars = {
    user: req.session.name,
  };
  res.render("homepage", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
