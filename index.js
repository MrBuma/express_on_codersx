const express = require('express');
const app = new express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('<h1> Hello the world </h1>');
})

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});