//   ___________________________________________________________________________________________
//  |       _____                                  ________                                     |
//  |      /     \                                /  ____  \                    __              |
//  |     /       \                              /  /    \__\                  |  |             |
//  |    /   ___   \                            /  /                           |  |             |
//  |   |   |   |   |                          |  |                            |  |             |
//  |   |   |___|   |                          |  |                            |  |             |
//  |   |           |  ---__   --___  ____     |  |             _____     _____|  |    _____    |
//  |   |    ___    | |   __| |     \/    \    |  |            /  _  \   /  _     |  /  __  \   |
//  |   |   |   |   | |  |    |  |\   |\   |    \  \      __  |  / \  | |  / \    | |  _____|   |
//  |   |   |   |   | |  |    |  | \  | \  |     \  \___/  /  \  \_/  | |  \_/    | | \_____    |
//  |   |___|   |___| |__|    |__| |__| |__|      \_______/    \_____/   \____/|__|  \_____/    |
//  |___________________________________________________________________________________________|

// Coding for ArmBot: Javascript

// 2 Motor, 1 servo's, 1 joystick


var five = require("johnny-five");
var board = new five.Board();


board.on("ready", function() {

  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });

  joystick.on("change", function() {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log("--------------------------------------");


    var ServoArray = [ turnServo ];

    var turnServo = function(){

      if (this.x >= 0.5){
        servo.step(-2);
      }

      if (this.x <= -0.5){
        servo.step(2);
      }
    }

    if (this.y >= 0.5){
      ServoArray[0]
    }

    if (this.y <= -0.5){

    }

  });


  // Create a new 'servo' hardware instance
  var servo = new five.Servo(10);

  // Servo alternate constructor with options

  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 10,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [55,155],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 95,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
  });


  // Add servo to REPL (optional)
  this.repl.inject({
    servo: servo
  });


  // Servo API

   //min()
  //
  // set the servo to the minimum degrees
  // defaults to 0
  //
  // eg. servo.min();

   //max()
  //
  // set the servo to the maximum degrees
  // defaults to 180
  //
  // eg. servo.max();

  // center()
  //
  // centers the servo to 90°
  //
  // servo.center();

  // to( deg )
  //
  // Moves the servo to position by degrees
  //
  // servo.to( 90 );

  // step( deg )
  //
  // step all servos by deg
  //
  // eg. array.step( -20 );



});
