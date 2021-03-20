let http = require("http")
let fs = require("fs");

http.createServer(function(request, response) {

    if (request.url === "/" && request.method === "GET") {
        fs.readFile("./frontEnd/tamrin5.html", "utf8", function(err, data) {
            if (err) return console.log(err);
            response.write(data);
            response.end();
        })
    } else if (request.url === "/earth1.jpg" && request.method === "GET") {
        fs.readFile("./frontEnd/earth1.jpg", function(err, data) {
            if (err) return console.log(err);
            response.setHeader("Content-Type", "image/jpg")
            response.setHeader('Access-Control-Allow-Origin', '*')
            response.write(data);
            response.end();
        })
    } else if (request.url === "/main.js" && request.method === "GET") {
        fs.readFile("./frontEnd/main.js", "utf8", function(err, data) {
            if (err) return console.log(err);
            response.write(data);
            response.end();
        })
    } else if (request.url === "/tamrin5.css" && request.method === "GET") {
        fs.readFile("./frontEnd/tamrin5.css", "utf8", function(err, data) {
            if (err) return console.log(err);
            response.write(data);
            response.end();
        })
    } else if (request.url === "/Vazir-Thin.ttf" && request.method === "GET") {
        fs.readFile("./frontEnd/Vazir-Thin.ttf", function(err, data) {
            if (err) return console.log(err);
            response.setHeader('Access-Control-Allow-Origin', '*')
            response.setHeader("Content-Type", "font/woff2")
            response.write(data);
            response.end();
        })
    } else if (request.url === "/" && request.method === "POST") {
        const myHead = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8 ',
        }
        var requestBody = '';
        request.on('data', function(data) {
            requestBody += data;
        });
        request.on('end', function() {
            response.writeHead(200, myHead);

            if (check(JSON.parse(requestBody))) {
                response.write(JSON.stringify({ result: true }), "utf8");
                response.end();
            } else {
                response.write(JSON.stringify({ result: false }), "utf8");
                response.end();
            }

        });
    } else {
        response.writeHead(404, 'Resource Not Found', { 'Content-Type': 'text/html' });
        response.end();
    }
}).listen(5000)

function check(user = {}) {
    let users = JSON.parse(fs.readFileSync("./json/node.json"));

    for (const item of users) {
        if (item.userName === user.userName) {
            if (item.passWord === user.passWord) {
                return true;
            }
        }
    }
    return false;
}