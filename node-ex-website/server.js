const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);


//BT-55AFXW (home router) is configured for port 6969
const AFXW = 6969;
//Use localhost:3000 for testing
const local = 3000;

//Comment out relevant section
//const port = AFXW
const port = local;

server.listen(port);
console.debug('Server listening on port ' + port);