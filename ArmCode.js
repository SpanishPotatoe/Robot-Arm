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
// 1 servo's, 1 joystick, 1 LCD screen, 1 Breadboard, 1 Potentiometer, 1 arduino
var five = require("johnny-five"),
  board, lcd;
var board = new five.Board();
board.on("ready", function() {
  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });
var servoMode = null
var joystickPosition = "center";
joystick.on("change", function() {
  //Determine position of joystick
  if ((Math.round(this.y * 100) / 100) >  0.9  )         { joystickPosition = "down"  }
  if ((Math.round(this.x * 100) / 100) >= 0.5  )         { joystickPosition = "lt"    }
  if (Math.round(this.y) == 0 && Math.round(this.x) == 0){ joystickPosition = "center"}
  if ((Math.round(this.x * 100) / 100) <= -0.5 )         { joystickPosition = "rt"    }
  if (Math.round(this.y)                = -1   )         { joystickPosition = "up"    }
  console.log("Joystick", servoMode);
  console.log("  x : ", this.x);
  console.log("  y : ", this.y);
  console.log("--------------------------------------");
  //Handle joystick up
  if (joystickPosition == "up"){
    //enter servo mode : full swing back
    lcd.clear().print("Servo Mode : ");
    lcd.cursor(1, 0);
    servoMode = 'FSB'
    lcd.print("Full Swing Back");
    //lcd.print(servoMode);
  }
  //Handle joystick down
  if (joystickPosition == "down"){
    //enter servo mode : Incremental hold
    lcd.clear().print("Servo Mode : ");
    lcd.cursor(1, 0);
    servoMode = 'IH'
    lcd.print("Incremental hold");
    //lcd.print(servoMode);
  }
  //Handle joystick center
  if (joystickPosition == "center"){
    //determine Servo  mode
    if (servoMode = 'FSB'){  servo.to(105);  }
  }
  //Handle joystick rt
  if (joystickPosition == "rt"){
    //determine Servo  mode
    if (servoMode = 'FSB'){  servo.to(155);  }
    if (servoMode = 'IH') {  servo.step(+2); }
  }
  //Handle joystick lt
  if (joystickPosition == "lt"){
    //determine Servo  mode
    if (servoMode = 'FSB'){   servo.to(70);  }
    if (servoMode = 'IH'){   servo.step(-2)  }
  }

/*  if (this.y >= 0.75){

  }
  if ( joystickPosition == "up" ){
    if (this.x >= 0.5){
      servo.to(70);
    }
    if (this.x < 0.5 && this.x > -0.5){
      servo.to(105);
    }
    if (this.x <= -0.5){
      servo.to(155);
    }
  }
  if (this.y <= -0.75){
    lcd.clear().print("Servo Mode : ");
    lcd.cursor(1, 0);
    lcd.print("Incremental hold");
    joystickPosition = "down"
  }
  if ( joystickPosition = "down" ){
    if (this.x >= 0.5){
      servo.step(-2);
    }
    if (this.x <= -0.5){
      servo.step(+2);
    }
  }

*/





console.log(joystickPosition);
});
  // Create a new 'servo' hardware instance
  var servo = new five.Servo(5);
  // Servo alternate constructor with options
  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 5,           // Which pin is it attached to?
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
  var led = new five.Led(13);
  // "blink" the led in 500ms on-off phase periods
  led.blink(500);
  lcd = new five.LCD({
      // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
      // Arduino pin # 7    8   9   10  11  12
      pins: [7, 8, 9, 10, 11, 12],
      backlight: 6,
      rows: 2,
      cols: 16
      // Options:
      // bitMode: 4 or 8, defaults to 4
      // lines: number of lines, defaults to 2
      // dots: matrix dimensions, defaults to "5x8"
    });
    // Tell the LCD you will use these characters:
    lcd.useChar("heart");
    // Line 1: Hi rmurphey & hgstrp!
    //lcd.clear().print("I :heart: you!");
    //lcd.cursor(1, 0);
    // Line 2: I <3 johnny-five
    // lcd.print("I").write(7).print(" johnny-five");
    // can now be written as:
    //lcd.print("I :heart: johnny-five");
    this.repl.inject({
      lcd: lcd
    });
});
