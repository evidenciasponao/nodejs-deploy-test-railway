const express = require('express');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Node desde Express</h1>');
    res.end();
})

server.listen(3000, function(){
    console.log('Server on Port 3000');
})