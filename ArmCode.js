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

// 1 Motor, 3 servo's, 1 button, 1 joystick


// Board setup

var five = require("johnny-five");
var board = new five.Board();


board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);

// Servo setup

board.on("ready", function() {

  // Initialize a Servo collection
  var servos = new five.Servos([9, 10]);


  servos.center();


  // Inject the `servo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  this.repl.inject({
    servos: servos
  });


  // min()
  //
  // set all servos to the minimum degrees
  // defaults to 0
  //
  // eg. servos.min();

  // max()
  //
  // set all servos to the maximum degrees
  // defaults to 180
  //
  // eg. servos.max();

  // to( deg )
  //
  // set all servos to deg
  //
  // eg. servos.to( deg );

  // step( deg )
  //
  // step all servos by deg
  //
  // eg. servos.step( -20 );

  // stop()
  //
  // stop all servos
  //
  // eg. servos.stop();

  // each( callbackFn )
  //
  // Execute callbackFn for each active servo instance
  //
  // eg.
  // servos.each(function( servo, index ) {
  //
  //  `this` refers to the current servo instance
  //
  // });

});



//Button setup
board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(2);

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
  });
});



//Joystick setup
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
  });
});
