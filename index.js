var five = require("johnny-five");
var board = new five.Board();

var parsedJSON = require('./susData.json');
var JSONString = JSON.stringify(parsedJSON);
var obj = JSON.parse(JSONString);
var a1 = obj.arduino1;
var s1_status, s2_status, s3_status;
// var numServos = Object.keys(a1).length;

board.on("ready", function() {
    console.log("Ready!");

    var led1 = new five.Led(7);
    var led2 = new five.Led(10);
    var led3 = new five.Led(13);

    // console.log(a1);

    for (const prop in a1) {
        // `prop` contains the name of each property, i.e. `'code'` or `'items'`
        // consequently, `data[prop]` refers to the value of each property, i.e.
        // either `42` or the array

        // console.log(a1[prop]);


        switch (prop) {
            case "s1":
            	// just one input right now
            	
            	s1_status = a1[prop].replace(/\s/g, '').split(',');

                for (i = 0; i < s1_status.length; i++) {
                	 servoController (s1_status[i], led1)
                }
               
                break;
            // case "s2":

            //     break;
            // case "s3":

            //     break;
        }
    }

    // led1.on();  
});

// function sanitizeStatus () {

// }

function servoController (status, ledID) {

	// console.log (status + ledID)

	switch (status) {
            case "red":
            	console.log("r");
            	ledID.on();
            	break;

            case "yellow": 
            	console.log("y"); 	
               	ledID.on();
               	break;

            case "neutral":
           		console.log("n"); 
             	ledID.off();
             	break;
        }

}