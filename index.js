var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//homepage
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/api/whoami',(request,response)=>{
    var ip = request.connection.remoteAddress;
    var language = request.headers['accept-language'];
    var os = request.headers['user-agent'];
    var result={
        "ipaddress":ip,
        "language":language,
        "software":os
    }
    response.end(JSON.stringify(result));
})

app.listen(port);