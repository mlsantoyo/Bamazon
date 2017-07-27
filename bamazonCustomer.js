var mysql = require("mysql");
var Table = require("cli-table");
var inquirer = require("inquirer"); 


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "bamazon"
});

function viewBuy(){
		
		
		
		var table = new Table({																																														
			head: ['ItemID', 'Product', 'Department', 'Price (US $)', 'Quantity']
			
		});

		connection.query('SELECT * FROM products', function(err, res){

		for (var i = 0; i < res.length; i++){
			table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity]);
						}
			console.log(table.toString());
			
			inquirer.prompt([{
            name: "item",
            type: "input",
            message: "What is the item ID you want to purchase?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "Please enter the quantity of this item you'd like to purchase",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            var id = answer.item - 1; 
            var purchase = res[id];
            var count = answer.Quantity;
            
            if (count <= purchase.stock_quantity) {
                console.log("Your total for " + "(" + count + ")" + " - " + purchase.product_name + " is: $" + (purchase.price * count).toFixed(2));
                
                connection.query("UPDATE products SET ? WHERE ?", 

                [
                	{
                    	stock_quantity: purchase.stock_quantity - count
                }, 
                {
                    	item_id: purchase.item_id
                }], function(err, res) {
                    
                    viewBuy();
                });

            } else {
                console.log("Sorry, we don't have enough of that item to fulfill your order. All we have is " + purchase.stock_quantity + " in stock. Please change the quantity of the order or check back soon!");
                viewBuy();
            }
        })
    })
}


viewBuy();