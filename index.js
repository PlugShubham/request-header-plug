var express = require('express');
var app = express();

app.get('/api/whoami',(request,response)=>{
    var ip = request.headers.host;
    var language = request.headers['accept-language'];
    var os = request.headers['user-agent'];
    console.log(request.headers.host + language);
    var result={
        "ipaddress":ip,
        "language":language,
        "software":os
    }
    response.end(JSON.stringify(result));
})

app.listen(3000);