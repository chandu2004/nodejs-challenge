var express = require("express");
var recordRouter = require("./record");

var app = express();

app.use("/record/", recordRouter);

module.exports = app;