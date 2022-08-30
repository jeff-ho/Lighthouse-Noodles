-- WORKS

SELECT user_id, users.name, item_id, items.name as name, SUM(item_quantity) as quantity, items.price
FROM carts JOIN items ON item_id = items.id
JOIN users ON user_id = users.id
GROUP BY items.price, items.name, users.name, carts.id
ORDER BY item_id;


SELECT carts.id, items.img_url as img, user_id, users.name, item_id, items.name as name, SUM(item_quantity) as quantity, items.price as price
FROM carts
JOIN items ON item_id = items.id
JOIN users ON user_id = users.id
GROUP BY user_id, item_id, items.price, items.img_url, items.name, users.name,carts.id
ORDER BY item_id;

--Doesnt work
SELECT items.img_url as img, user_id, users.name, item_id, items.name as name, SUM(item_quantity) as quantity, items.price
FROM carts JOIN items ON item_id = items.id
JOIN users ON user_id = users.id
GROUP BY user_id, item_id, items.price, items.name, users.name, carts.id, img
ORDER BY item_id;




