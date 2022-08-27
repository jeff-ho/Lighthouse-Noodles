DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  price INTEGER,
  description TEXT,
  img_url VARCHAR(255),
  category_id INTEGER REFERENCES categories(id)
);
