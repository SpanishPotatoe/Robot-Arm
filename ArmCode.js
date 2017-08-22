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


var five = require("johnny-five"),
  board, motor, led;

board = new five.Board();

board.on("ready", function() {
  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 5
  });

  // Inject the `motor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    motor: motor
  });

  // Motor Event API

  // "start" events fire when the motor is started.
  motor.on("start", function() {
    console.log("start", Date.now());
  });

  // "stop" events fire when the motor is stopped.
  motor.on("stop", function() {
    console.log("stop", Date.now());
  });

  // Motor API

  // start([speed)
  // Start the motor. `isOn` property set to |true|
  // Takes an optional parameter `speed` [0-255]
  // to define the motor speed if a PWM Pin is
  // used to connect the motor.
  motor.start(25);

  // stop()
  // Stop the motor. `isOn` property set to |false|
});
