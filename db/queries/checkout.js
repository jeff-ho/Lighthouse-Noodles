const db = require('../connection');

const addToCheckout = (item) => {
  return db.query(
    'SELECT user_id, item_id, SUM(item_quantity) as quantity, items.price FROM carts JOIN items ON item_id = items.id GROUP BY user_id, item_id, items.price;')
    .then(data => {
      console.log(data.rows)
      return data.rows[0];
    });
};

module.exports = { addToCheckout }


