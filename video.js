var http = require("http");
var fs = require("fs");

console.log("Server is up and running");

http.createServer(function(req, res){
res.writeHead(200, {'Content-Type':'video/mp4'});
var rs = fs.createReadStream("Minute short class development.mp4");
rs.pipe(res);
}).listen(3000);