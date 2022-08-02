const { myDate } = require("./myModule");

var http = requre("http");
var dt = requere('/NodeFolder/myModule.js')

http.createServer(function(req, res){
    res.writeHead(200,
        {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDate());
    res.end();
}).listen(8080);