var express = require("express");
var http = require('http');
var app = express();
var port = 8000;


var text = "Hello, World!";
var toggle = true;

app.get("/api/v1/text", function(req, res){
    return res.status(200).send({text: text});
});

app.get("/api/v1/change", function(req, res){
    if (toggle){
        text = "Hello, Johnny5";
        toggle = false;
    } else {
        text = "Hello, World";
        toggle = true;
    }
});

app.use("/", express.static('public'));

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
});

