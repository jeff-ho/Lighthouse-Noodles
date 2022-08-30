const db = require('../connection');

const addToCheckout = (item) => {
  return db.query(
    'SELECT user_id, item_id, items.name as name, SUM(item_quantity) as quantity, items.price FROM carts JOIN items ON item_id = items.id GROUP BY user_id, item_id, items.price, items.name ORDER BY item_id;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { addToCheckout }


