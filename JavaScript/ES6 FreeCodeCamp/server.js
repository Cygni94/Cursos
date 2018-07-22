//serve-json.js
var http = require("http");
var fs = require("fs");
console.log("Server will listen at :  127.0.0.1:3000 ");
http.createServer(function (req, res) {
    //change the MIME type to 'application/json'
    res.writeHead(200, { "Content-Type": "application/json" });
    //Create a JSON
    let json_response = {
        fs.readFile("./assets/index.pdf", (error, data) => {
        if (error) {
            res.json({ status: "error", msg: err });
        } else {
            res.write(data);
            res.end();
        }
    });
    };
    console.log("Server Running");
    res.end(JSON.stringify(json_response));
}).listen(3000);
