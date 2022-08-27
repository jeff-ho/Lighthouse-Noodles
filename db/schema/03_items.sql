DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  price INTEGER,
  description TEXT,
  img_url VARCHAR(255),
  category_id INTEGER

);

SELECT items.name as name, users.name as username
FROM users
JOIN orders ON user_id = users.id
JOIN items ON item_id = items.id
GROUP BY items.name, users.name
LIMIT 2;
