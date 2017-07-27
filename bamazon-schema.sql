DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(13,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE orders (
  orderNumber INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(13,2) NULL,
  orderTotal DECIMAL(13,2),
  PRIMARY KEY (orderNumber)
);

SELECT * FROM products;
select * from order;
