DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER,
  item_price INTEGER,
  item_quantity INTEGER,
  date TIMESTAMP,
  user_id INTEGER,
  status BOOLEAN DEFAULT NULL
);

