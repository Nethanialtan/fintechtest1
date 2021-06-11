const customer = require("./customer");
const express = require("express");

var app = express();
app.use(customer.router);

app.listen(3000);
