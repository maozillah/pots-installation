var five = require("johnny-five");
var board = new five.Board();

var neutral = 120;
var red = 30;
var yellow = 90;

var servo1, servo2;

var options = [red, yellow, neutral];

board.on("ready", function() {

    servo1 = new five.Servo({
        pin: 11
    });
    servo2 = new five.Servo({
        pin: 10
    });

    setInterval(spoofData, 3000);

});

function spoofData() {
    var status = options[Math.floor(Math.random() * options.length)];

    servo1.to(status);
    servo2.to(status);
}
