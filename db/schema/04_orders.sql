DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id),
  item_price INTEGER,
  item_quantity INTEGER,
  date TIMESTAMP,
  user_id INTEGER REFERENCES users(id),
  status BOOLEAN DEFAULT NULL
);

