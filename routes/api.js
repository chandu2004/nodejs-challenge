var express = require("express");
var recordRouter = require("./record");

var app = express();

app.use("/records/", recordRouter);

module.exports = app;
