

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //set response headers

    res.setHeader("content-type", "text/html");

    //checking for url paths to serve file

    let path = "./views/";
    switch(req.url){
        case"/":
            path += "/index.html";
            res.statusCode = 200;
            break;
        case"/about":
            path += "/about.html";
            res.statusCode = 200;
            break;
        default:
            path += "/404.html";
            res.statusCode = 404;
            break;
    }

    //writing a html file as response
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

//listening server

server.listen("3000", "localhost", ()=> {
    console.log("listening to server on port 3000");
});