// This is a call back

const database = require("./database");
var connection = database.connection;

function get_all_customers() {
  customer_connection.query(
    "select * from customers", // query in string format
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    }
  );
}

function get_customer_by_id(id) {
  customer_connection.query(
    "select * from customers where id = ${id}",
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    }
  );
}

function update_wallet_by_id(id, wallet) {
    customer_connection.query(
        `update customers set wallet = ${wallet} where id = ${id}`,
        (error, results) => {
            console.log(error);

        } else {
            console.log("Delete!");
        }
    )
}
function delete_customer_by_id(id) {
    customer_connection.query(
        "delete * from customers where id = ${id}"
        (errror, results) => {
            console.log(error);
        }
    ) else {
        console.log("Delete");
    }

}


get_customer_by_id(29);
