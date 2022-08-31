const db = require("../connection");

const sendOrder = (item) => {
  return db
    .query(
      //"SELECT carts.id as cart_id, items.img_url as img, user_id, users.name, item_id, items.name as name, SUM(item_quantity) as quantity, items.price FROM carts JOIN items ON item_id = items.id JOIN users ON user_id = users.id GROUP BY user_id, item_id, items.price, img, items.name, users.name,carts.id ORDER BY item_id;"
    )
    .then((data) => {
      return data.rows;
    });
};


module.exports = { sendOrder };
