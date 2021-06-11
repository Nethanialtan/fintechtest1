const customer = require("./customer");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(customer.router);

app.listen(3000);
