const db = require("../connection");

const addToCheckout = (item) => {
  return db
    .query(
      "SELECT carts.id as cart_id, items.img_url as img, user_id, users.name, item_id, items.name as name, SUM(item_quantity) as quantity, items.price FROM carts JOIN items ON item_id = items.id JOIN users ON user_id = users.id GROUP BY user_id, item_id, items.price, img, items.name, users.name,carts.id ORDER BY item_id;"
    )
    .then((data) => {
      return data.rows;
    });
};


const addOneToItem = (itemId) => {

  console.log('addOneToItem', 'function being called');
  console.log(itemId,'current checkasdasdasdasdasdas');
  return db.query(
    'UPDATE carts SET item_quantity = item_quantity + 1 WHERE id = $1;', [itemId])
    .then(data => {
      //console.log(data.rows)
      return data.rows[0];
    });
}

module.exports = { addToCheckout, addOneToItem };

//UPDATE carts SET item_quantity = item_quantity + 1 WHERE id = 1;
