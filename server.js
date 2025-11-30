const http= require("http");
const PORT=2800;
const hostname="127.0.0.1";
const fs= require("fs");
var express = require('express');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const server=http.createServer(function(req,res){

    //res.write("Hello User from the server");
    //res.end();
    res.writeHead(200,{"Content-type":"text/html"});
    fs.readFile("index.html",function(error,data){
        if (error){
            res.writeHead(404);
            res.write("Error, file not found!");
        }else{
            res.write(data);
        }
        res.end();


});
})

server.listen(PORT,function (error){
    if(error){
        console.log(`You have an error, ${error}`)
    }else {
        console.log(`Server is running' http://${hostname}:${PORT}`);
        
    }
});