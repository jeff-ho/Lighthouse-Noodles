const db = require('../connection');

const addToOrder = (item) => {
  return db.query(
    'INSERT INTO carts (user_id, item_id, item_quantity) VALUES ($1, $2, $3);', [1, item, 1])
    .then(data => {
      //console.log(data.rows)
      return data.rows[0];
    });
};

const updateQuantity = (id) => {
  return db.query(
    'UPDATE carts SET item_quantity = item_quantity + 1 WHERE id = $1;', [id])
    .then(data => {
      //console.log(data.rows)
      return data.rows[0];
    });
};



module.exports = { addToOrder }

