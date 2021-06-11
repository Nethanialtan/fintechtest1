const customer = require("./customer");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.use(customer.router);

app.listen(3000);
