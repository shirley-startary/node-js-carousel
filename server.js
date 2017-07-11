var express = require('express');
var path = require('path');
var app = express();
  app.get('/',(req, res) => {
    // res.send('hello world')
    res.sendFile(__dirname+'/index.html');
    //dirname.- traduce el directorio base.
  });
app.use('/static',express.static(path.join(__dirname,'node_modules')));
app.use('/static',express.static(path.join(__dirname,'assets')));
app.listen(8080);
