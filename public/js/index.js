console.log("connected!");

let socket = io("http://localhost:8888"); //1
$(document). ready(function (){

    

    socket.on('greeting', function (data) { //4
        console.log(data.msg); //5
        socket.emit('thankyou', { msg: 'Thank you for connecting me! -Client' }); //6
    });

 });

$('.green').on('click', function(){
    console.log("se ha presionado el verde")
    socket.emit("green");
});

$('.blue').on('click', function(){
    socket.emit("blue");
});

$('.pink').on('click', function(){
    socket.emit("pink");
});

socket.on("allGreen", function(){
    $("body").css("background-color", "green");
});

socket.on("allBlue", function(){
    $("body").css("background-color", "blue");
});

socket.on("allPink", function(){
    $("body").css("background-color", "pink");
});