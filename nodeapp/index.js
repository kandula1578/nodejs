var express = require('express');
var app = express();
console.log("testingsss");

app.get('/', function (req, res) {
    res.send('{ "response": "Hello, Welcome to Valaxy" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
