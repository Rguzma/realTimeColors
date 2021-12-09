

var express = require("express");

var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(__dirname + "/public"));
const server = app.listen(8888);
 console.log("listening on port 8888");
const io = require('socket.io')(server);

app.set("views", __dirname + "/public");
app.set("view engine", "ejs");

app.get("/", function(request, response){
    console.log("Home");
    response.render("index.ejs");
});

    
io.on('connection', function (socket) { //2
    console.log("You've reache the server");
    // console.log(socket);
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
    socket.on('thankyou', function (data) { //7
        console.log(data.msg); //8 (note: this log will be on your server's terminal)
    });
});
io.on('connection', function (socket) {
    console.log("users selected green");
    // console.log(socket);
    socket.on("green", function () {

    io.sockets.emit('allGreen'); //3

    });
    
});
io.on('connection', function (socket) {
    console.log("users selected pink");
    // console.log(socket);
    socket.on("pink", function () {

    io.sockets.emit('allPink'); //3

    });
    
});
io.on('connection', function (socket) {
    console.log("users selected green");
    // console.log(socket);
    socket.on("blue", function () {

    io.sockets.emit('allBlue'); //3

    });
    
});
