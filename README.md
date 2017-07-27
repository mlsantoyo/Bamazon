# bamazon

### Overview
A Node.js &amp; MySQL digital storefront. This is a command line Node app that displays available items and allows a customer to purchase.


### Node.js
Three JavaScript files replicate the basics of a simple ecommerce engine:

- `bamazonCustomer.js` 
  - Displays the available products, the item ID, department, price and quantity in stock which are all stored in a mySQL database
  - Customer can select item ID to purchase and then enter the quantity 
  - If a customer's order quantity is less than available stock quantity then the order will process, the total amount will display or the customer and the stock quantity in the database will be depleted by the order count
  - If a customer's order quantity is more than available stock quantity then the order will not process and a message will display telling the customer how many of the product are in stock and instructing the customer to either change the quantity on the order or check back soon
  



### MySQL
bamazonCustomer.js queries a mySQL database called `bamazon` created with a local connection on my laptop

- The `bamazon-schema.sql` file shows how I created the database and tables

### Screenshots
Below are some screenshots that show how it works


- Demo of the `bamazonCustomer.js` file
  - Run `node bamazonCustomer.js` 
  	  ![Customer](/images/runnode.PNG)
  - The customer is propted to select the ID of the item they want to purchase
      ![Item](/images/displayitems.PNG)
  - The customer is propted to enter the quantity of that item that they want to purchase
      ![Quantity](/images/quantity.PNG)
  - The order is placed and the Quantity is reduced by the quantity of the order
      ![Order](/images/orderplaced.PNG)
  - If the quantity ordered exceeds the available quantity, the order is not placed and customer is prompted to change order quantity or check back soon
      ![OutofStock](/images/outofstock.PNG)


