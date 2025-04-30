const http = require('http');
const server = http.createServer(function (req, res){

    if(req.url === '/getSecretData'){
        res.end("Amartya is the secret!!!!");
    }

    res.end("Hello Amartya!");
});
server.listen(7777);