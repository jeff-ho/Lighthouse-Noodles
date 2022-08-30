SELECT user_id, users.name, item_id, items.name as name, SUM(item_quantity) as quantity, items.price
FROM carts
JOIN items ON item_id = items.id
JOIN users ON user_id = users.id
GROUP BY user_id, item_id, items.price, items.name, users.name
ORDER BY item_id;
