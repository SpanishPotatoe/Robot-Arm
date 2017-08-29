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
  board, lcd;

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



    var ServoArray = require ('./ServoArray');

    var leftRight = 1

    function JoystickToggle(){
      if (this.y >= .75 ){
        Object.create(leftRight);
      }
    }

    if (this.y >= 0.75){
      lcd.clear().print("Servo Mode : ");
      lcd.cursor(1, 0);
      lcd.print("Left Right");
      JoystickToggle();
    }


    if ( leftRight == 1 ){

      if (this.x >= 0.5){
      servo.to(70);
    }

    if (this.x <= 0.5 && this.x >= -0.5){
      servo.to(105);
    }

    if (this.x <= -0.5){
      servo.to(155);
    }
  }



  if (this.y <= -0.75){
    lcd.clear().print("Servo Mode : ");
    lcd.cursor(1, 0);
    lcd.print("Turn Degree");
    var leftRight = 0
  }


console.log(leftRight);

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
