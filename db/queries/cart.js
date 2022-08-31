const db = require('../connection');

const addToOrder = (item) => {
  return db.query(
    `
    INSERT INTO carts (user_id, item_id, item_quantity)
    VALUES($1, $2, $3)
    ON CONFLICT (item_id) DO UPDATE
    SET item_quantity = carts.item_quantity + 1;`, [1, item, 1])

    .then(data => {
      //console.log(data.rows)
      return data.rows[0];
    });
};

const updateQuantity = (cartId, quantity) => {
  return db.query(
    'UPDATE carts SET item_quantity = $2 WHERE id = $1;', [cartId, quantity])
    .then(data => {
      //console.log(data.rows)
      return data.rows[0];
    });
};




module.exports = { addToOrder, updateQuantity }

