var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://user:168198@ds129024.mlab.com:29024/cocode");
app.use(express.static(path.join(__dirname, '../public')));
app.use("/api/v1", restRouter);
app.use('/', indexRouter);

app.listen(3000, function() {
    console.log("App is running!");
})