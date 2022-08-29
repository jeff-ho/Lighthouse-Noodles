const db = require('../connection');

const getItemsByAppetizer = () => {
  return db.query(
    'SELECT items.id,items.name, items.description, items.price, items.img_url FROM items JOIN categories ON category_id = categories.id WHERE categories.id = 1;'
  )
    .then(data => {
      return data.rows;
    });
};

const getItemsByMain= () => {
  return db.query(
    'SELECT items.id, items.name, items.description, items.price, items.img_url FROM items JOIN categories ON category_id = categories.id WHERE categories.id = 2;'
  )
    .then(data => {
      return data.rows;
    });
};

const getItemsBySnack= () => {
  return db.query(
    'SELECT items.id, items.name, items.description, items.price, items.img_url FROM items JOIN categories ON category_id = categories.id WHERE categories.id = 3;'
  )
    .then(data => {
      return data.rows;
    });
};

const getItemsByDrink= () => {
  return db.query(
    'SELECT items.id, items.name, items.description, items.price, items.img_url FROM items JOIN categories ON category_id = categories.id WHERE categories.id = 4;'
  )
    .then(data => {
      return data.rows;
    });
};

module.exports = { getItemsByAppetizer, getItemsByMain, getItemsBySnack, getItemsByDrink };
